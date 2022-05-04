import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { appRoutes } from 'common';

import {
  Login,
  Dashboard,
  Messages,
  PetCards,
  Volunteering,
  Error404,
} from 'views';
import { AuthLayout } from 'layouts';
import { RequireAuth } from 'components';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path={`/${appRoutes[0].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes[0].name}
            >
              <Dashboard />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={`/${appRoutes[1].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes[1].name}
            >
              <Messages />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={`/${appRoutes[2].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes[2].name}
            >
              <PetCards />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={`/${appRoutes[3].slug}`}
        element={
          <RequireAuth redirectTo="/">
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes[3].name}
            >
              <Volunteering />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);
