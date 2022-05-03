import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PetCard, Pagination } from 'components';

interface Details {
  title: string;
  content: string;
}

interface PetObject {
  id: string;
  image: string;
  name: string;
  breed: string;
  gender: string;
  details: Details[];
}

export const Dashboard = () => {
  const [pets, setPets] = useState<PetObject[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(9);

  useEffect(() => {
    const fetchPets = async () => {
      const res = await axios.get('./pets.json');
      setPets(res.data);
    };

    fetchPets();
  }, []);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets?.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="flex flex-col justify-between min-h-[calc(100vh-4.375rem)] px-8 pt-8 pb-12">
      <div>
        <h1 className="text-xl text-left text-lappka-primary-grey mb-8 selection:bg-lappka-green selection:text-lappka-white">
          {pets?.length === 0 ? 'Nic tutaj nie ma' : 'Zwierzęta w schronisku'}
        </h1>
        <ul className="flex flex-wrap gap-24">
          {currentPets?.map((pet) => (
            <PetCard
              key={pet.id}
              image={pet.image}
              name={pet.name}
              breed={pet.breed}
              gender={pet.gender}
              details={pet.details}
            />
          ))}
        </ul>
      </div>
      <Pagination
        petsPerPage={petsPerPage}
        totalPets={pets?.length}
        paginate={paginate}
      />
    </section>
  );
};
