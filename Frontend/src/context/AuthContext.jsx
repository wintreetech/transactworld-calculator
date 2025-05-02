import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { decryptData, encryptData, importKey } from "../utils/crypto";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const AuthProvider = ({ children }) => {
  // Centralized authentication state
  const [state, setState] = useState({
    user: null,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      setIsAuthenticated(true);
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

      const message = response.data.message;
      toast.success(message);
      return true;
    } catch (error) {
      console.error("logout error", error);
    } finally {
      localStorage.removeItem("user_encrypted");
      localStorage.removeItem("user_iv");
      resetAuth();
    }
  };

  const resetAuth = () => {
    setState({ user: null });
    setIsAuthenticated(false);
  };

  const validateSession = async () => {
    const encrypted = localStorage.getItem("user_encrypted");
    const iv = localStorage.getItem("user_iv");

    if (!encrypted || !iv) {
      resetAuth();
      setLoading(false);
      return;
    }

    try {
      const key = await importKey();
      const decryptedUser = await decryptData(encrypted, iv, key);

      const token = decryptedUser.token;
      const decodeToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodeToken.exp && decodeToken.exp < currentTime) {
        localStorage.removeItem("user_encrypted");
        localStorage.removeItem("user_iv");
        toast.error("Session expired. Please login again.");
      } else {
        setState({ user: decryptedUser });
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Session validation failed:", error);
      resetAuth();
    }

    setLoading(false);
  };

  // Check local storage for authentication state on initial load
  useEffect(() => {
    validateSession();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        isAuthenticated,
        loading,
        handleAuthRequest,
        handleLogoutUser,
        resetAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
