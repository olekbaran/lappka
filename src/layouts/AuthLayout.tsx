import React, { useState } from 'react';

import styles from 'styles/layouts/authLayout.module.scss';
import { Header, SideBar } from 'components';
import { MenuIcon, CloseIcon } from 'assets/icons';

type AuthLayoutProps = {
  currentPage: string;
  userName: string;
  companyName: string;
  avatar: string;
  children: JSX.Element;
};

export const AuthLayout: React.FunctionComponent<AuthLayoutProps> = ({
  currentPage,
  userName,
  companyName,
  avatar,
  children,
}) => {
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);
  const openMobileNav = () => {
    setIsMobileNavShown(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavShown(false);
  };

  return (
    <main className={styles.layout}>
      <SideBar isShown={isMobileNavShown}>
        <div
          aria-hidden
          onClick={closeMobileNav}
          onKeyDown={closeMobileNav}
          className={styles.closeIcon}
        >
          <CloseIcon />
        </div>
      </SideBar>
      <div className={styles.rightSection}>
        <Header
          currentPage={currentPage}
          userName={userName}
          companyName={companyName}
          avatar={avatar}
        >
          <div
            aria-hidden
            onClick={openMobileNav}
            onKeyDown={openMobileNav}
            className={styles.menuIcon}
          >
            <MenuIcon />
          </div>
        </Header>
        <div className={styles.rightSection__content}>{children}</div>
      </div>
    </main>
  );
};
