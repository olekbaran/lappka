import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'styles/views/login.module.scss';
import { appRoutes } from 'app';
import { Images } from 'assets/images';
import { InputField, InputCheckbox } from 'components';
import {
  UserIcon,
  LockIcon,
  FacebookIcon,
  GoogleIcon,
  ErrorIcon,
} from 'assets/icons';

const loginUser = (login: string, password: string) => {
  if (login === 'admin' && password === 'admin') {
    return 1234;
  }
  return null;
};

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const [isLoginEmpty, setIsLoginEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isAccount, setIsAccount] = useState(true);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login.length === 0) {
      setIsLoginEmpty(true);
      setTimeout(() => {
        setIsLoginEmpty(false);
      }, 1400);
    }
    if (password.length === 0) {
      setIsPasswordEmpty(true);
      setTimeout(() => {
        setIsPasswordEmpty(false);
      }, 1400);
    }
    if (login && password) {
      const token = loginUser(login, password);
      if (token) {
        if (rememberMe === 'on') {
          localStorage.setItem('token', `${token}`);
        } else {
          sessionStorage.setItem('token', `${token}`);
        }
        navigate(appRoutes.dashboard.slug);
      } else {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setIsAccount(false);
        setTimeout(() => {
          setIsAccount(true);
          setLogin('');
          setPassword('');
          event.target.reset();
        }, 2200);
      }
    }
  };

  useEffect(() => {
    if (
      (localStorage.getItem('token') &&
        localStorage.getItem('token') !== null) ||
      (sessionStorage.getItem('token') &&
        sessionStorage.getItem('token') !== null)
    ) {
      navigate(appRoutes.dashboard.slug);
    }
  });

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.loginBox}>
        <img src={Images.LogoLogin} alt="Logo Łappka" className={styles.logo} />
        <h1 className={styles.headingText}>
          <span className={styles.headingText__desktop}>
            Zaloguj się do aplikacji
          </span>
          <span className={styles.headingText__mobile}>Zaloguj się</span>
        </h1>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <InputField
            type="text"
            name="login"
            placeholder="login"
            icon={<UserIcon />}
            isEmpty={isLoginEmpty}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <InputField
            type="password"
            name="password"
            placeholder="hasło"
            icon={<LockIcon />}
            isEmpty={isPasswordEmpty}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className={styles.otherInputs}>
            <InputCheckbox
              name="remember-me"
              label="Zapamiętaj mnie"
              onChange={(e) => {
                setRememberMe(e.target.value);
              }}
            />
            <button
              type="button"
              className={styles.otherInputs__forgotPassword}
            >
              Zapomniałeś hasła?
            </button>
          </div>
          <button
            className={`${styles.loginForm__submit} ${
              isAccount === false ? styles['loginForm__submit--error'] : ''
            }`}
          >
            Zaloguj się
          </button>
        </form>
        <div
          className={`${styles.loginError} ${
            isAccount === false ? styles['loginError--show'] : ''
          }`}
        >
          <ErrorIcon />
          <p className={styles.loginError__text}>Nie ma takiego konta</p>
        </div>
        <div className={styles.otherMethods}>
          <p className={styles.otherMethods__text}>Lub zaloguj się przez</p>
          <div className={styles.otherMethods__icons}>
            <FacebookIcon />
            <GoogleIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
