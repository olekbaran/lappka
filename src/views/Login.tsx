import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import { boolean, object, string } from 'yup';

import styles from 'styles/views/login.module.scss';
import { appRoutes } from 'app';
import { FormInputField, FormInputCheckbox } from 'components';
import { Images } from 'assets/images';
import {
  FacebookIcon,
  GoogleIcon,
  UserIcon,
  LockIcon,
  ErrorIcon,
  FingerPrintIcon,
} from 'assets/icons';

interface formValues {
  login: string;
  password: string;
  rememberMe: boolean;
  company: boolean;
  nip: string;
}

const Validation = object().shape({
  login: string().required('Pole obowiązkowe'),
  password: string().required('Pole obowiązkowe'),
  company: boolean(),
  nip: string().when('company', {
    is: true,
    then: string().required('Pole obowiązkowe'),
  }),
});

const loginUser = (login: string, password: string) => {
  if (login === 'admin' && password === 'admin') {
    return 1234;
  }
  return null;
};

export const Login = () => {
  const navigate = useNavigate();
  const [isAccount, setIsAccount] = useState(true);

  const handleSubmit = (
    values: formValues,
    { resetForm }: FormikHelpers<formValues>
  ) => {
    const token = loginUser(values.login, values.password);
    if (token) {
      if (values.rememberMe === true) {
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
        resetForm();
      }, 2200);
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
        <Formik
          initialValues={{
            login: '',
            password: '',
            rememberMe: false,
            company: false,
            nip: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Validation}
        >
          {(formikProps) => {
            const { values } = formikProps;
            return (
              <Form className={styles.loginForm}>
                <FormInputField
                  type="text"
                  name="login"
                  placeholder="login"
                  icon={<UserIcon />}
                />
                <FormInputField
                  type="password"
                  name="password"
                  placeholder="hasło"
                  icon={<LockIcon />}
                />
                <div className={styles.otherInputs}>
                  <div className={styles.otherInputs__checkboxes}>
                    <FormInputCheckbox
                      name="remember-me"
                      label="Zapamiętaj mnie"
                    />
                    <FormInputCheckbox name="company" label="Firma?" />
                  </div>
                  <button
                    type="button"
                    className={styles.otherInputs__forgotPassword}
                  >
                    Zapomniałeś hasła?
                  </button>
                </div>
                {values.company === true ? (
                  <FormInputField
                    type="text"
                    name="nip"
                    placeholder="nip"
                    icon={<FingerPrintIcon />}
                  />
                ) : (
                  ''
                )}
                <button
                  type="submit"
                  className={`${styles.loginForm__submit} ${
                    isAccount === false
                      ? styles['loginForm__submit--error']
                      : ''
                  }`}
                >
                  Zaloguj się
                </button>
              </Form>
            );
          }}
        </Formik>
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
