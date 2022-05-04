import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { LoadingAnimation, Error, PetCard, Pagination } from 'components';

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
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [pets, setPets] = useState<PetObject[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    const fetchPets = async () => {
      await axios
        .get('./pets.json')
        .then((response) => response.data)
        .then((data) => {
          setPets(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setShowError(true);
        });
    };

    fetchPets();
  }, []);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets?.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section
      className={`flex flex-col min-h-[calc(100vh-4.375rem)] px-8 pt-8 pb-12 ${
        loading === true || showError === true
          ? 'justify-center items-center'
          : 'justify-between'
      }`}
    >
      <div>
        {loading === false && showError === false ? (
          <h1 className="text-xl text-left text-lappka-primary-grey mb-8 selection:bg-lappka-green selection:text-lappka-white">
            {pets?.length === 0 ? 'Nic tutaj nie ma' : 'Zwierzęta w schronisku'}
          </h1>
        ) : (
          ''
        )}
        {showError === true ? <Error /> : ''}
        {loading === true ? (
          <LoadingAnimation />
        ) : (
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
        )}
      </div>
      <Pagination
        petsPerPage={petsPerPage}
        totalPets={pets?.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </section>
  );
};
