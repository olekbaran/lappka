import React from 'react';
import { Link } from 'react-router-dom';

import { appRoutes } from 'app';

export const Error404 = () => (
  <main className="flex flex-col gap-12 items-center justify-center min-h-screen">
    <h1 className="flex items-center">
      <p className="text-2xl font-medium text-lappka-green mr-5 py-2.5 pr-6 border-r border-solid border-r-lappka-green selection:bg-lappka-green selection:text-lappka-dark-white">
        404
      </p>
      <p className="text-sm text-lappka-primary-grey selection:bg-lappka-green selection:text-lappka-dark-white">
        Ta strona nie istnieje.
      </p>
    </h1>
    <Link
      to={appRoutes.dashboard.slug}
      className="rounded-lg shadow-lg px-8 py-3 bg-lappka-white text-lappka-green selection:bg-lappka-green selection:text-lappka-white"
    >
      {appRoutes.home.name}
    </Link>
  </main>
);
