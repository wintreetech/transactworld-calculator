import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { decryptData, encryptData, importKey } from "../utils/crypto";

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
      // localStorage.setItem("user", JSON.stringify(newData));
      const key = await importKey();
      const { encrypted, iv } = await encryptData(newData, key);
      localStorage.setItem("user_encrypted", encrypted);
      localStorage.setItem("user_iv", iv);
      // the setState is used to set the data when get the response and is temporary and will run when this function runs.
      setState({ user: newData });
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} Successful`
      );
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

      // localStorage.removeItem("user");
      localStorage.removeItem("user_encrypted");
      localStorage.removeItem("user_iv");

      setState({ user: null });

      const message = response.data.message;
      toast.success(message);
      return true;
    } catch (error) {
      console.error("logout error", error);
    }
  };

  // Check local storage for authentication state on initial load
  useEffect(() => {
    const initAuth = async () => {
      const encrypted = localStorage.getItem("user_encrypted");
      const iv = localStorage.getItem("user_iv");
      if (encrypted && iv) {
        try {
          const key = await importKey();
          const decryptedUser = await decryptData(encrypted, iv, key);
          // console.log("decryptedUser", decryptedUser);
          setState({ user: decryptedUser });
        } catch (error) {
          console.error(error);
          localStorage.removeItem("user_encrypted");
          localStorage.removeItem("user_iv");
        }
      }
      setLoading(false);
    };

    // before encryption logic
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   setState({ user: JSON.parse(storedUser) });
    // }
    // setLoading(false);
    initAuth();
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
