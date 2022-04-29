import React from "react";

type HeaderProps = {
  currentPage: string;
  userName: string;
  companyName: string;
  children: JSX.Element;
};

export const Header: React.FunctionComponent<HeaderProps> = ({
  currentPage,
  userName,
  companyName,
  children,
}) => {
  return (
    <header className="flex items-center justify-between h-[4.375rem] w-full px-8 bg-lappka-white">
      <div className="flex items-center text-xl font-bold text-lappka-primary-grey selection:text-lappka-white selection:bg-lappka-green">
        {children}
        <p className="md:ml-0 ml-8 xs:hidden">{currentPage}</p>
      </div>
      <div className="flex items-center ml-8">
        <img
          src="https://avatars.githubusercontent.com/u/74045117?v=4"
          alt=""
          className="w-9 h-9 mr-3 rounded-full selection:bg-lappka-green"
        />
        <div>
          <p className="text-left text-sm font-bold text-lappka-primary-grey selection:text-lappka-white selection:bg-lappka-green">
            {userName}
          </p>
          <p className="text-left text-xs text-lappka-light-grey selection:text-lappka-white selection:bg-lappka-green">
            {companyName}
          </p>
        </div>
      </div>
    </header>
  );
};
