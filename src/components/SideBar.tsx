import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';

import styles from 'styles/components/sideBar.module.scss';
import { appRoutes, navigationRoutes } from 'app';
import { Images } from 'assets/images';
import { LogoutIcon } from 'assets/icons';

type SideBarProps = {
  isShown: boolean;
  children: JSX.Element;
};

export const SideBar: React.FunctionComponent<SideBarProps> = ({
  isShown,
  children,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    navigate(appRoutes.home.slug);
  };

  return (
    <aside
      className={`${styles.sideBar} ${
        isShown === true ? styles['sideBar--show'] : ''
      }`}
    >
      <div className={styles.navWrapper}>
        <Link to={appRoutes.home.slug}>
          <img
            src={Images.LogoDashboard}
            alt="Logo Łappka"
            className={styles.logo}
          />
        </Link>
        {children}
        <hr className={styles.hr} />
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navigationRoutes.map((Route) => (
              <li key={Route.slug}>
                <NavLink
                  to={Route.slug}
                  className={({ isActive }) =>
                    `${styles.navLink} ${
                      isActive ? styles['navLink--active'] : ''
                    }`
                  }
                >
                  <div className={styles.navLink__element}>
                    {Route.icon}
                    <span>{Route.name}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.logoutWrapper}>
        <button onClick={logout} className={styles.logoutButton}>
          <LogoutIcon />
          <span className={styles.logoutButton__text}>Wyloguj się</span>
        </button>
      </div>
    </aside>
  );
};
