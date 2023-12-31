import { useState } from "react";
import Table from "components/Table";
import { data } from "data/dummyData";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function PaginationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Calculate the index of the first and last item to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pages = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* render data */}
      <Table data={pages} />

      <div className="flex w-full justify-between items-center p-2">
        <div className="lowercase">
          shows {itemsPerPage}-{currentPage} of {totalPages} pages
        </div>

        <div className="pagination-button">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={
              currentPage === 1
                ? "pagination-inactive pagination-button-action"
                : "pagination-button-action"
            }
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={
                currentPage === index + 1
                  ? "pagination-button-active"
                  : "pagination-button-inactive"
              }
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={
              currentPage === totalPages
                ? "pagination-inactive pagination-button-action"
                : "pagination-button-action"
            }
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
