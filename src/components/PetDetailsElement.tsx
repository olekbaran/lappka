import React from 'react';

type PetDetailsElementProps = {
  title: string;
  content: string;
};

export const PetDetailsElement: React.FunctionComponent<
  PetDetailsElementProps
> = ({ title, content }) => (
  <li className="border border-solid border-lappka-pet-light-grey rounded-xl py-1 w-[5.891rem] xs-sm:w-[calc(50%-5px)]">
    <strong className="text-sm font-bold text-lappka-pet-grey selection:bg-lappka-green selection:text-lappka-white">
      {content}
    </strong>
    <p className="text-xs text-lappka-pet-light-grey selection:bg-lappka-green selection:text-lappka-white">
      {title}
    </p>
  </li>
);
