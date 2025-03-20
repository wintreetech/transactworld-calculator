import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Centralized authentication state
  const [state, setState] = useState({
    user: null,
  });

  const [loading, setLoading] = useState(true); // Track loading state

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

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthContext;
