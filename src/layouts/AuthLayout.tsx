import React, { useState } from 'react';

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
    <main className="max-w-[2160px] mx-auto flex drop-shadow-lg">
      <SideBar isShown={isMobileNavShown}>
        <div className="md:hidden flex items-center">
          <div
            aria-hidden
            onClick={closeMobileNav}
            onKeyDown={closeMobileNav}
            className="cursor-pointer"
          >
            <CloseIcon />
          </div>
          <p className="md:ml-0 ml-8 xs:hidden text-xl font-bold text-lappka-primary-grey selection:text-lappka-white selection:bg-lappka-green">
            Menu
          </p>
        </div>
      </SideBar>
      <div className="w-full">
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
            className="md:hidden block cursor-pointer"
          >
            <MenuIcon />
          </div>
        </Header>
        {children}
      </div>
    </main>
  );
};
