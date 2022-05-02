import React from "react";

import { Images } from "assets/images";
import { PetCard } from "components";

export const Dashboard = () => (
  <section className="p-8">
    <h1 className="text-xl text-left text-lappka-primary-grey mb-8 selection:bg-lappka-green selection:text-lappka-white">
      Zwierzęta w schronisku
    </h1>
    <ul className="flex flex-wrap gap-24">
      <PetCard
        image={Images.Moniak}
        name="Moniak"
        breed="Kundelek"
        gender="male"
        details={[
          { title: "Wiek", content: "1 rok" },
          { title: "Kolor", content: "Czarny" },
          { title: "Waga", content: "1.2 kg" },
          { title: "Sterylizacja", content: "Tak" },
        ]}
      />
    </ul>
  </section>
);
