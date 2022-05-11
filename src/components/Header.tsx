import React from 'react';

import styles from 'styles/components/header.module.scss';

type HeaderProps = {
  currentPage: string;
  userName: string;
  companyName: string;
  avatar: string;
  children: JSX.Element;
};

export const Header: React.FunctionComponent<HeaderProps> = ({
  currentPage,
  userName,
  companyName,
  avatar,
  children,
}) => (
  <header className={styles.header}>
    <div className={styles.currentPage}>
      {children}
      <h1 className={styles.currentPage__text}>{currentPage}</h1>
    </div>
    <div className={styles.user}>
      <img
        src={avatar}
        alt={`Zdjęcie użytkownika ${userName}`}
        className={styles.user__avatar}
      />
      <div>
        <p className={styles.user__name}>{userName}</p>
        <p className={styles.user__company}>{companyName}</p>
      </div>
    </div>
  </header>
);
