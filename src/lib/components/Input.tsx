import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  icon: JSX.Element;
};

export const Input: React.FunctionComponent<InputProps> = ({
  type,
  name,
  placeholder,
  icon,
}) => (
  <div className="w-full h-14 relative flex items-center mt-6 drop-shadow">
    <div className="absolute left-5 z-10">{icon}</div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="form-input w-full h-full border border-solid border-lappka-light-grey rounded-xl pl-14 pr-4 text-left text-sm relative text-lappka-primary-grey placeholder:text-lappka-light-grey focus:ring-0 focus:border-lappka-green selection:bg-lappka-green selection:text-lappka-white"
    />
  </div>
);
