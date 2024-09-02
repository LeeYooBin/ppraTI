import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return children;
};