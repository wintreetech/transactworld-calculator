import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      navigate("/auth", { state: { from: location }, replace: true });
    }
  }, [navigate, location]);

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return children;
}

export default ProtectedRoutes;
