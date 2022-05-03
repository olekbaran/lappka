import React from 'react';

type PaginationProps = {
  petsPerPage: number;
  totalPets: number | undefined;
  paginate: Function;
};

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  petsPerPage,
  totalPets,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPets! / petsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null;
  }

  return (
    <nav>
      <ul className="flex justify-center gap-8 mt-8">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
