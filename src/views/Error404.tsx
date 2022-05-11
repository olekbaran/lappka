import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'styles/views/error404.module.scss';
import { appRoutes } from 'app';

export const Error404 = () => (
  <main className={styles.errorWrapper}>
    <div className={styles.error}>
      <h1 className={styles.error__code}>404</h1>
      <h2 className={styles.error__text}>Ta strona nie istnieje.</h2>
    </div>
    <Link to={appRoutes.dashboard.slug} className={styles.backToHome}>
      {appRoutes.home.name}
    </Link>
  </main>
);
