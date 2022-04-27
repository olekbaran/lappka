import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login, RequireAuth } from "lib/components";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<RequireAuth redirectTo="/" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};
