import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace />;
};
