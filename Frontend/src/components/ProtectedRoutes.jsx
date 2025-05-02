import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function ProtectedRoutes({ children }) {
  const { state, isAuthenticated, loading } = useContext(AuthContext);
  const user = state?.user;
  const role = user?.role;

  if (loading) {
    return <h1>Please wait...</h1>;
  }

  if (isAuthenticated && role === "user") {
    return <Navigate to="/" />;
  }

  if (isAuthenticated && role === "admin") {
    return children;
  }
  // return isAuthenticated ? children : <Navigate to="/auth" />;
  return <Navigate to="/auth" />;
}

export default ProtectedRoutes;
