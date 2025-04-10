import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

function ProtectedRoutes({ children }) {
  const ctx = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        const token = user.token;

        if (token) {
          const decodeToken = jwtDecode(token);

          const currentTime = Date.now() / 1000;

          if (decodeToken.exp && decodeToken.exp < currentTime) {
            setIsAuthenticated(false);
            toast.error("Session expired. Please login again.");
            localStorage.removeItem("user");
            setLoading(false);
            return;
          }

          if (decodeToken) {
            setIsAuthenticated(true);
            setRole(user.role);
          } else {
            setIsAuthenticated(false);
            toast.error("Invalid user");
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        toast.error("Something went wrong");
      }
    }
    setLoading(false);
  }, []);

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
