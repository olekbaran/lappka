import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import styles from 'styles/views/dashboard.module.scss';
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
      className={`contentWrapper ${
        loading === true || showError === true ? 'contentWrapper--center' : ''
      }`}
    >
      {loading === false && showError === false ? (
        <h2 className="heading">
          {pets.length === 0 ? 'Nic tutaj nie ma' : 'Zwierzęta w schronisku'}
        </h2>
      ) : (
        ''
      )}
      {showError === true ? <Error /> : ''}
      {loading === true ? (
        <LoadingAnimation />
      ) : (
        <ul className={styles.petsList}>
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
      <div
        className={`${styles.paginationWrapper} ${
          loading === true || showError === true
            ? styles['paginationWrapper--hidden']
            : ''
        }`}
      >
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
