import React from "react";
import { Navigate } from "react-router-dom";

type RequireAuthProps = {
  redirectTo: string;
  children: JSX.Element;
};

export const RequireAuth: React.FunctionComponent<RequireAuthProps> = ({
  redirectTo,
  children,
}) => {
  if (
    (localStorage.getItem("token") === null ||
      !localStorage.getItem("token")) &&
    (sessionStorage.getItem("token") === null ||
      !sessionStorage.getItem("token"))
  ) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};
