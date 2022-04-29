import React from "react";

import { MaleIcon } from "assets/icons";

type PetCardElementProps = {
  image: string;
  name: string;
  breed: string;
  gender: string;
};

export const PetCardElement: React.FunctionComponent<PetCardElementProps> = ({
  image,
  name,
  breed,
  gender,
}) => (
  <div className="w-[455px] h-[34rem] bg-lappka-white shadow-lg rounded-2xl">
    <img src={image} alt={name} className="mb-2 selection:bg-lappka-green" />
    <div className="flex items-center justify-between px-6">
      <div>
        <h2 className="text-3xl text-left font-bold text-lappka-pet-grey selection:bg-lappka-green selection:text-lappka-white">
          {name}
        </h2>
        <h3 className="text-left text-lappka-pet-grey selection:bg-lappka-green selection:text-lappka-white">
          {breed}
        </h3>
      </div>
      {gender === "male" ? <MaleIcon /> : ""}
    </div>
  </div>
);
