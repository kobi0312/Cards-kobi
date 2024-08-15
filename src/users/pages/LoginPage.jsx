import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";

export default function LoginPage() {
  const { user } = useUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return <div>Welcome to login page</div>;
}
