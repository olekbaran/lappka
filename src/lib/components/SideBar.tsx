import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { Images } from "assets";
import { ListElement, LogoutIcon } from "lib/components";

interface PagesContent {
  name: string;
  icon: JSX.Element;
  slug: string;
}

type SideBarProps = {
  pages: PagesContent[];
  isShown: boolean;
  children: JSX.Element;
};

export const SideBar: React.FunctionComponent<SideBarProps> = ({
  pages,
  isShown,
  children,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside
      className={`${
        isShown === true ? "translate-x-0" : "-translate-x-full"
      } flex flex-col items-start justify-between md:translate-x-0 md:static absolute min-h-screen md:w-80 w-screen md:pt-4 pt-3.5 pb-12 bg-lappka-white transition duration-500 ease-in-out`}
    >
      <div className="w-full">
        <div className="px-8">
          {children}
          <img
            src={Images.LogoDashboard}
            alt="Logo Łappka"
            className="selection:bg-lappka-green md:mt-0 mt-4"
          />
        </div>
        <hr className="h-px w-full mt-4 bg-lappka-light-blue" />
        <nav className="w-full px-8 lg:px-6 md:px-4 mt-8">
          <ul>
            {pages.map((page) => (
              <ListElement key={page.slug}>
                <NavLink
                  to={`/${page.slug}`}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full h-full pl-4 rounded-md bg-lappka-green font-bold text-lappka-white selection:text-lappka-green selection:bg-lappka-white"
                      : "font-medium ml-4"
                  }
                >
                  <div className="flex items-center h-full w-full">
                    {page.icon}
                    <span className="ml-4">{page.name}</span>
                  </div>
                </NavLink>
              </ListElement>
            ))}
          </ul>
        </nav>
      </div>
      <div className="px-8 w-full h-11 flex items-center">
        <button onClick={logout} className="flex items-center ">
          <LogoutIcon />
          <span className="ml-4 font-medium text-lappka-light-grey selection:bg-lappka-green selection:text-lappka-white">
            Wyloguj się
          </span>
        </button>
      </div>
    </aside>
  );
};
