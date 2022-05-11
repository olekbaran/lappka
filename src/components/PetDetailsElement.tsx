import React from 'react';

import styles from 'styles/components/petDetailsElement.module.scss';

type PetDetailsElementProps = {
  title: string;
  content: string;
};

export const PetDetailsElement: React.FunctionComponent<
  PetDetailsElementProps
> = ({ title, content }) => (
  <li className={styles.detailsElement}>
    <strong className={styles.detailsElement__title}>{content}</strong>
    <p className={styles.detailsElement__content}>{title}</p>
  </li>
);
