import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  icon: JSX.Element;
  setValueHook: Function;
  isEmpty: boolean;
};

export const InputText: React.FunctionComponent<InputProps> = ({
  type,
  name,
  placeholder,
  icon,
  setValueHook,
  isEmpty,
}) => (
  <div className="w-full h-14 relative flex items-center mt-6 drop-shadow">
    <div className="absolute left-5 z-10">{icon}</div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        setValueHook(e.target.value);
      }}
      className={`form-input w-full h-full border border-solid rounded-xl pl-14 pr-4 text-left text-sm text-lappka-primary-grey placeholder:text-lappka-light-grey focus:ring-0 focus:border-lappka-green selection:bg-lappka-green selection:text-lappka-white ${
        isEmpty === true ? "border-lappka-red" : "boder-lappka-primary-grey"
      }`}
    />
  </div>
);
