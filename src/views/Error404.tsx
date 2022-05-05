import React from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => (
  <main className="flex flex-col gap-12 items-center justify-center min-h-screen">
    <div className="flex items-center">
      <h1 className="text-2xl font-medium text-lappka-green mr-5 py-2.5 pr-6 border-r border-solid border-r-lappka-green selection:bg-lappka-green selection:text-lappka-dark-white">
        404
      </h1>
      <h2 className="text-sm text-lappka-primary-grey selection:bg-lappka-green selection:text-lappka-dark-white">
        Ta strona nie istnieje.
      </h2>
    </div>
    <Link
      to="/dashboard"
      className="rounded-lg shadow-lg px-8 py-3 bg-lappka-white text-lappka-green selection:bg-lappka-green selection:text-lappka-white"
    >
      Strona główna
    </Link>
  </main>
);
