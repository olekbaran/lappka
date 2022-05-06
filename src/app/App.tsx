import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { appRoutes } from 'app';

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
      <Route path={appRoutes.home.slug} element={<Login />} />
      <Route
        path={appRoutes.dashboard.slug}
        element={
          <RequireAuth redirectTo={appRoutes.home.slug}>
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes.dashboard.name}
            >
              <Dashboard />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={appRoutes.messages.slug}
        element={
          <RequireAuth redirectTo={appRoutes.home.slug}>
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes.messages.name}
            >
              <Messages />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={appRoutes.petCards.slug}
        element={
          <RequireAuth redirectTo={appRoutes.home.slug}>
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes.petCards.name}
            >
              <PetCards />
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path={appRoutes.volunteering.slug}
        element={
          <RequireAuth redirectTo={appRoutes.home.slug}>
            <AuthLayout
              userName="Robert G."
              companyName="Nazwa firmy"
              avatar="https://avatars.githubusercontent.com/u/74045117?v=4"
              currentPage={appRoutes.volunteering.name}
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
