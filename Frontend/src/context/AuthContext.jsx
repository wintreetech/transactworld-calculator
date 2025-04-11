import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const AuthProvider = ({ children }) => {
  // Centralized authentication state
  const [state, setState] = useState({
    user: null,
  });

  const [loading, setLoading] = useState(true); // Track loading state

  const handleAuthRequest = async (data, type) => {
    try {
      const endpoint = type === "register" ? "/register" : "/login";
      const response = await axios.post(
        `${baseUrl}${apiUrl}/auth${endpoint}`,
        data
      );

      const { data: newData } = response.data;
      localStorage.setItem("user", JSON.stringify(newData));
      // the setState is used to set the data when get the response and is temporary and will run when this function runs.
      setState({ user: newData });
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} Successful`
      );
      // the data that is returned is stored in the suth.jsx file
      return newData;
    } catch (error) {
      if (error.response) {
        throw new Error(
          error.response.data.message ||
            `error sending ${type.charAt(0).toUpperCase() + type.slice(1)} data`
        );
      } else {
        throw new Error(error.message || "Something went wrong");
      }
    }
  };

  const handleLogoutUser = async () => {
    try {
      const response = await axios.post(`${baseUrl}${apiUrl}/auth/logout`);

      localStorage.removeItem("user");

      setState({ user: null });

      const message = response.data.message;
      const statusText = response.statusText;
      toast.success(message);
      return statusText;
    } catch (error) {
      console.error("logout error", error);
    }
  };

  // Check local storage for authentication state on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setState({ user: JSON.parse(storedUser) });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ state, loading, handleAuthRequest, handleLogoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
