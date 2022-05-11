import React from 'react';

import styles from 'styles/components/petCard.module.scss';
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
  <li className={styles.pet}>
    <img
      src={image}
      alt={`Zdjęcie zwierzaka ${name}`}
      className={styles.pet__photo}
    />
    <div className={styles.petText}>
      <div>
        <h3 className={styles.petText__name}>{name}</h3>
        <h4 className={styles.petText__breed}>{breed}</h4>
      </div>
      {gender === 'male' ? <MaleIcon /> : ''}
      {gender === 'female' ? <FemaleIcon /> : ''}
    </div>
    <ul className={styles.pet__details}>
      {details.map((detailsElement) => (
        <PetDetailsElement
          key={detailsElement.title}
          title={detailsElement.title}
          content={detailsElement.content}
        />
      ))}
    </ul>
    <div className={styles.buttonWrapper}>
      <button className={styles.editButton}>Edytuj</button>
    </div>
  </li>
);
