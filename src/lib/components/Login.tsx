import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Images } from "../../assets";
import { InputText } from "../components";
import {
  UserIcon,
  LockIcon,
  FacebookIcon,
  GoogleIcon,
  ErrorIcon,
} from "../components";

function loginUser(login: string, password: string) {
  if (login === "admin" && password === "admin") {
    return 1234;
  }
}

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginEmpty, setIsLoginEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isAccount, setIsAccount] = useState(true);

  const handleSubmit = (event: React.ChangeEvent<any>) => {
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
        localStorage.setItem("token", `${token}`);
        navigate("/dashboard");
      } else {
        localStorage.removeItem("token");
        setIsAccount(false);
        setTimeout(() => {
          setIsAccount(true);
          setLogin("");
          setPassword("");
          event.target.reset();
        }, 2200);
      }
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== null
    ) {
      navigate("/dashboard");
    }
  });

  return (
    <main className="flex justify-center items-center h-[40rem] :w-[39rem] md:my-8 md:min-h-[calc(100vh_-_4rem)] min-h-screen md:bg-lappka-dark-white">
      <div className="flex flex-col justify-center md:h-[40rem] md:w-[39rem] relative p-8 rounded-3xl bg-lappka-white md:shadow-xl w-screen h-screen min-h-fit">
        <img
          src={Images.Logo}
          alt="Logo Łappka"
          className="my-0 mx-auto mb-6 selection:bg-lappka-green"
        />
        <h1 className="text-4xl font-bold text-lappka-green pb-4 tracking-wider relative after:content-[''] after:w-20 after:h-1 after:absolute after:bg-lappka-green after:bottom-0 after:left-[calc(50%_-_2.5rem)] after:rounded-full selection:bg-lappka-green selection:text-lappka-white">
          <span className="md:inline hidden">Zaloguj się do aplikacji</span>
          <span className="md:hidden inline">Zaloguj się</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center md:px-28"
        >
          <InputText
            type="text"
            name="login"
            placeholder="login"
            icon={<UserIcon />}
            setValueHook={setLogin}
            isEmpty={isLoginEmpty}
          />
          <InputText
            type="password"
            name="password"
            placeholder="hasło"
            icon={<LockIcon />}
            setValueHook={setPassword}
            isEmpty={isPasswordEmpty}
          />
          <div className="flex items-center justify-between galaxy-fold:justify-center mt-6 w-full galaxy-fold:flex-col">
            <div className="flex items-center mr-2 galaxy-fold:mr-0">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="form-checkbox rounded border border-solid border-lappka-light-grey text-lappka-green cursor-pointer checked:border-0 focus:ring-transparent"
              />
              <label
                htmlFor="remember-me"
                className="text-sm text-lappka-light-grey ml-1.5 cursor-pointer selection:bg-lappka-green selection:text-lappka-white"
              >
                Zapamiętaj mnie
              </label>
            </div>
            <button
              type="button"
              className="ml-2 galaxy-fold:ml-0 text-sm text-lappka-light-grey galaxy-fold:mt-6 focus:outline-none selection:bg-lappka-green selection:text-lappka-white"
            >
              Zapomniałeś hasła?
            </button>
          </div>
          <button
            className={`uppercase text-lappka-white font-bold w-full h-14 rounded-xl drop-shadow-lg mt-12 focus:outline-none selection:bg-lappka-white selection:text-lappka-green transition ease-out duration-500 ${
              isAccount === false ? "bg-lappka-red" : "bg-lappka-green"
            }`}
          >
            Zaloguj się
          </button>
        </form>
        <div className="flex justify-center">
          <div
            className={`absolute mt-3 ${
              isAccount === false
                ? "flex items-center justify-center"
                : "hidden"
            }`}
          >
            <ErrorIcon />
            <span className="ml-2 text-sm text-lappka-red selection:text-lappka-white selection:bg-lappka-red">
              Nie ma takiego konta
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 galaxy-fold:flex-col">
          <p className="text-sm font-bold text-lappka-light-grey selection:bg-lappka-green selection:text-lappka-white">
            Lub zaloguj się przez
          </p>
          <div className="flex items-center galaxy-fold:mt-6">
            <div className="ml-8 galaxy-fold:ml-0">
              <FacebookIcon />
            </div>
            <div className="ml-4">
              <GoogleIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
