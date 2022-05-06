import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

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
  const [pets, setPets] = useState<PetObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    const fetchPets = async () => {
      await axios
        .get('./pets.json')
        .then((response: AxiosResponse<PetObject[]>) => response.data)
        .then((data) => {
          setPets(data);
        })
        .catch(() => {
          setShowError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchPets();
  }, []);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section
      className={`flex flex-col min-h-[calc(100vh-4.375rem)] pr-8 pt-8 pb-12 ${
        loading === true || showError === true
          ? 'justify-center items-center'
          : 'justify-between'
      }`}
    >
      <div>
        {loading === false && showError === false ? (
          <h2 className="text-xl md:text-left text-lappka-primary-grey mb-8 ml-8 selection:bg-lappka-green selection:text-lappka-white">
            {pets.length === 0 ? 'Nic tutaj nie ma' : 'Zwierzęta w schronisku'}
          </h2>
        ) : (
          ''
        )}
        {showError === true ? <Error /> : ''}
        {loading === true ? (
          <div className="ml-8 overflow-hidden">
            <LoadingAnimation />
          </div>
        ) : (
          <ul className="pets-list flex md:justify-start justify-center flex-wrap gap-24 pl-8">
            {currentPets.map((pet) => (
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
      <div className={loading === true || showError === true ? 'hidden' : ''}>
        <Pagination
          petsPerPage={petsPerPage}
          totalPets={pets.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </section>
  );
};
