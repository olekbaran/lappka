import React from 'react';

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

  return (
    <nav className="flex justify-center flex-wrap gap-8 mt-24">
      <button
        onClick={() => {
          paginate(currentPage - 1);
          scrollToTop();
        }}
        className={`w-11 h-11 rounded-md text-lappka-light-grey bg-lappka-white selection:bg-lappka-green selection:text-lappka-white ${
          currentPage === 1
            ? 'pointer-events-none bg-lappka-dark-white text-opacity-20'
            : ''
        }`}
      >
        &lt;
      </button>
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
      <button
        onClick={() => {
          paginate(currentPage + 1);
          scrollToTop();
        }}
        className={`w-11 h-11 rounded-md text-lappka-light-grey bg-lappka-white selection:bg-lappka-green selection:text-lappka-white ${
          currentPage === pageNumbers.length
            ? 'pointer-events-none bg-lappka-dark-white text-opacity-20'
            : ''
        }`}
      >
        &gt;
      </button>
    </nav>
  );
};
