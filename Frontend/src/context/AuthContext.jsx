import React, { createContext, useEffect, useState } from "react";
import { Customers } from "../components/admin";
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
    <AuthContext.Provider value={{ state, loading, handleLogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
