import React from 'react';

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
  const pageNumbers = [];

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
    <nav className="flex justify-center flex-wrap gap-8 mt-24 ml-8">
      <button
        onClick={() => {
          paginate(currentPage - 1);
          scrollToTop();
        }}
        className={`flex justify-center items-center w-11 h-11 rounded-md xs-sm:hidden text-lappka-light-grey bg-lappka-white selection:bg-lappka-green selection:text-lappka-white ${
          currentPage === 1
            ? 'pointer-events-none bg-lappka-dark-white text-opacity-20'
            : ''
        }`}
      >
        <ArrowLeftIcon />
      </button>
      <div
        className={`flex justify-center flex-wrap gap-8 ${
          currentPage >= 3 ? 'pagination-3' : ''
        } ${
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? 'pagination-last'
            : ''
        } ${
          currentPage === pageNumbers[pageNumbers.length - 2]
            ? 'pagination-one-before-last'
            : ''
        } ${currentPage === 2 ? 'pagination-2' : ''}`}
      >
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              paginate(number);
              scrollToTop();
            }}
            className={`${
              currentPage === number
                ? 'bg-lappka-green text-lappka-white selection:bg-lappka-white selection:text-lappka-green'
                : 'bg-lappka-white text-lappka-green selection:bg-lappka-green selection:text-lappka-white'
            } w-11 h-11 rounded-md`}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          paginate(currentPage + 1);
          scrollToTop();
        }}
        className={`flex justify-center items-center w-11 h-11 rounded-md xs-sm:hidden text-lappka-light-grey bg-lappka-white selection:bg-lappka-green selection:text-lappka-white ${
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? 'pointer-events-none bg-lappka-dark-white text-opacity-20'
            : ''
        }`}
      >
        <ArrowRightIcon />
      </button>
    </nav>
  );
};
