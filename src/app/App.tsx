import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from 'common';

import { Login, Dashboard, Messages, PetCards, Volunteering } from 'views';
import { AuthLayout } from 'layouts';
import { RequireAuth } from 'components';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path={`/${AppRoutes[0].slug}`}
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
      <Route
        path={`/${AppRoutes[1].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={AppRoutes[1].name}
            >
              <Messages />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={`/${AppRoutes[2].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={AppRoutes[2].name}
            >
              <PetCards />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={`/${AppRoutes[3].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={AppRoutes[3].name}
            >
              <Volunteering />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  </BrowserRouter>
);
