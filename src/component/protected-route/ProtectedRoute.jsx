import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./../../hooks/AuthContext";
import Load from "../load/Load";

export function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();
    if (loading) return <Load />;
    if (!isAuthenticated)
      return <Navigate to="/sign-in" state={{ from: location }} replace />;
    return children;
}

export function GuestRoute({ children }) {
  const { isAuthenticated, user } = useAuth();
  if ((location)) return <Load />;
  if (isAuthenticated)
    return <Navigate to={`/profile/${user.username}`} replace />;
  return children;
}



