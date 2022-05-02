import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes } from "common";

import { Login, Dashboard } from "views";
import { AuthLayout } from "layouts";
import { RequireAuth } from "components";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth redirectTo="/">
              <AuthLayout
                userName="Robert G."
                companyName="Nazwa firmy"
                avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
                currentPage={AppRoutes[0].name}
              >
                <Dashboard />
              </AuthLayout>
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};
