import React from 'react';

type ListElementProps = {
  children: JSX.Element;
};

export const ListElement: React.FunctionComponent<ListElementProps> = ({
  children,
}) => (
  <li className="flex items-center h-11 mb-4 text-left text-lappka-light-grey selection:bg-lappka-green selection:text-lappka-white">
    {children}
  </li>
);
