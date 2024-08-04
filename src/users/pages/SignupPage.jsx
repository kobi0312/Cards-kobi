import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function SignupPage() {
  const user = {};
  if (user) return <Navigate to={ROUTES.ROOT} replace />;
  return <div>Welcome to signup page</div>;
}
