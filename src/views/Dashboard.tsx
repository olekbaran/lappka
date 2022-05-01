import React, { useState } from "react";

import { Images } from "assets/images";
import { Header, SideBar, PetCard } from "components";
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
    <main className="max-w-[2160px] mx-auto flex drop-shadow-lg">
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
          <ul className="flex flex-wrap gap-24">
            <PetCard
              image={Images.Moniak}
              name="Moniak"
              breed="Kundelek"
              gender="male"
              details={[
                { title: "Wiek", content: "1 rok" },
                { title: "Kolor", content: "Czarny" },
                { title: "Waga", content: "1.2 kg" },
                { title: "Sterylizacja", content: "Tak" },
              ]}
            />
          </ul>
        </section>
      </div>
    </main>
  );
};
