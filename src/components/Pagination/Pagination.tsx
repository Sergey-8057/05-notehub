import ReactPaginate from 'react-paginate';

import css from './Pagination.module.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  changePage: (nextPage: number) => void;
}

export default function Pagination({ page, totalPages, changePage }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => changePage(selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
