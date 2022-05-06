import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  isEmpty: boolean;
}

export const InputField: React.FunctionComponent<InputProps> = ({
  icon,
  isEmpty,
  ...props
}) => (
  <div className="w-full h-14 relative flex items-center mt-6">
    <div className="absolute left-5 z-10">{icon}</div>
    <input
      className={`form-input w-full h-full border border-solid rounded-xl pl-14 pr-4 text-left text-sm text-lappka-primary-grey placeholder:text-lappka-light-grey focus:ring-0 focus:border-lappka-green selection:bg-lappka-green selection:text-lappka-white ${
        isEmpty === true ? 'border-lappka-red' : 'boder-lappka-primary-grey'
      }`}
      {...props}
    />
  </div>
);
