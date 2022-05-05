import React from 'react';

import { MaleIcon, FemaleIcon } from 'assets/icons';
import { PetDetailsElement } from 'components';

interface PetCardDetails {
  title: string;
  content: string;
}

type PetCardProps = {
  image: string;
  name: string;
  breed: string;
  gender: string;
  details: PetCardDetails[];
};

export const PetCard: React.FunctionComponent<PetCardProps> = ({
  image,
  name,
  breed,
  gender,
  details,
}) => (
  <li className="w-full max-w-[455px] pb-9 bg-lappka-white shadow-lg rounded-2xl">
    <img
      src={image}
      alt={name}
      className="rounded-t-[inherit] mb-2 selection:bg-lappka-green"
    />
    <div className="flex items-center flex-wrap gap-4 justify-between px-6">
      <div>
        <h2 className="text-3xl mr-4 text-left font-bold text-lappka-pet-grey selection:bg-lappka-green selection:text-lappka-white">
          {name}
        </h2>
        <h3 className="text-left text-lappka-pet-grey selection:bg-lappka-green selection:text-lappka-white">
          {breed}
        </h3>
      </div>
      {gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
    </div>
    <ul className="flex items-center flex-wrap px-6 mt-4 mb-6 gap-2.5">
      {details.map((detailsElement) => (
        <PetDetailsElement
          key={detailsElement.title}
          title={detailsElement.title}
          content={detailsElement.content}
        />
      ))}
    </ul>
    <div className="flex justify-end px-6">
      <button className="w-1/2 xs-sm:w-full h-12 rounded-xl bg-lappka-pet-green text-lappka-white selection:bg-lappka-white selection:text-lappka-pet-green">
        Edytuj
      </button>
    </div>
  </li>
);
