import React, { useState } from "react";

import {
  Header,
  SideBar,
  MenuIcon,
  CloseIcon,
  DashboardIcon,
  MessageIcon,
  AnimalCardsIcon,
  VolunteeringIcon,
} from "lib/components";

export const Dashboard = () => {
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);
  const openMobileNav = () => {
    setIsMobileNavShown(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavShown(false);
  };

  return (
    <main>
      <div className="flex drop-shadow-lg">
        <SideBar
          pages={[
            { name: "Dashboard", icon: <DashboardIcon />, slug: "dashboard" },
            { name: "Wiadomości", icon: <MessageIcon />, slug: "wiadomości" },
            {
              name: "Karty zwierząt",
              icon: <AnimalCardsIcon />,
              slug: "karty-zwierząt",
            },
            {
              name: "Wolontariat",
              icon: <VolunteeringIcon />,
              slug: "wolontariat",
            },
          ]}
          isShown={isMobileNavShown}
        >
          <div className="md:hidden flex items-center">
            <div onClick={closeMobileNav} className="cursor-pointer">
              <CloseIcon />
            </div>
            <p className="md:ml-0 ml-8 xs:hidden text-xl font-bold text-lappka-primary-grey selection:text-lappka-white selection:bg-lappka-green">
              Menu
            </p>
          </div>
        </SideBar>
        <Header
          currentPage="Dashboard"
          userName="Robert G."
          companyName="Nazwa firmy"
        >
          <div
            onClick={openMobileNav}
            className="md:hidden block cursor-pointer"
          >
            <MenuIcon />
          </div>
        </Header>
      </div>
    </main>
  );
};
