import React, { useState } from "react";

import { Images } from "assets/images";
import { Header, SideBar, PetCardElement } from "components";
import { MenuIcon, CloseIcon } from "assets/icons";

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
        <SideBar isShown={isMobileNavShown}>
          <div className="md:hidden flex items-center">
            <div onClick={closeMobileNav} className="cursor-pointer">
              <CloseIcon />
            </div>
            <p className="md:ml-0 ml-8 xs:hidden text-xl font-bold text-lappka-primary-grey selection:text-lappka-white selection:bg-lappka-green">
              Menu
            </p>
          </div>
        </SideBar>
        <div className="w-full">
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
          <section className="p-8">
            <h1 className="text-xl text-left text-lappka-primary-grey mb-8 selection:bg-lappka-green selection:text-lappka-white">
              Zwierzęta w schronisku
            </h1>
            <ul>
              <li>
                <PetCardElement
                  image={Images.Moniak}
                  name="Moniak"
                  breed="Kundelek"
                  gender="male"
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
