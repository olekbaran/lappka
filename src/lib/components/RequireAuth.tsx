import React from "react";
import { Navigate } from "react-router-dom";

import { Dashboard } from "../components";

type RequireAuthProps = {
  redirectTo: string;
};

export const RequireAuth: React.FunctionComponent<RequireAuthProps> = ({
  redirectTo,
}) => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to={redirectTo} />;
  }

  return <Dashboard />;
};
