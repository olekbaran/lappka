import React from 'react';

import styles from 'styles/components/pagination.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from 'assets/icons';

type PaginationProps = {
  petsPerPage: number;
  totalPets: number | undefined;
  currentPage: number;
  paginate: (arg: number) => void;
};

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  petsPerPage,
  totalPets,
  currentPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPets! / petsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (currentPage <= 3) {
    pageNumbers.splice(currentPage + 2);
  } else {
    pageNumbers.splice(0, currentPage - 3);
    pageNumbers.splice(5);
  }

  return (
    <nav className={styles.pagination}>
      <button
        onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1);
            scrollToTop();
          }
        }}
        className={`${styles.paginationButton} ${
          styles.pagination__nextPrevButton
        } ${
          currentPage === 1
            ? styles['pagination__nextPrevButton--disabled']
            : ''
        }`}
      >
        <ArrowLeftIcon />
      </button>
      <div
        className={`${styles.pagesList} ${
          currentPage >= 3 ? styles['pagesList--3Elements'] : ''
        } ${
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? styles['pagesList--lastElement']
            : ''
        } ${
          currentPage === pageNumbers[pageNumbers.length - 2]
            ? styles['pagesList--1BeforeLastElement']
            : ''
        } ${currentPage === 2 ? styles['pagesList--2Elements'] : ''}`}
      >
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              paginate(number);
              scrollToTop();
            }}
            className={`${styles.paginationButton} ${
              currentPage === number ? styles['paginationButton--active'] : ''
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (currentPage < pageNumbers[pageNumbers.length - 1]) {
            paginate(currentPage + 1);
            scrollToTop();
          }
        }}
        className={`${styles.paginationButton} ${
          styles.pagination__nextPrevButton
        } ${
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? styles['pagination__nextPrevButton--disabled']
            : ''
        }`}
      >
        <ArrowRightIcon />
      </button>
    </nav>
  );
};
