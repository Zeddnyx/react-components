import { memo, useState } from "react";

interface IPagination {
  data: {
    name: string;
    id?: number;
  }[];
}

function Pagination({ data }: IPagination) {
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
    <div className="container-pagination">
      {/* render data */}
      <div className="pagination-content">
        {pages.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>

      {/* pagination */}
      <div className="pagination-button">
        {/* Previous page button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="text-gray-500"
        >
          Prev
        </button>

        {/* Page numbers */}
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

        {/* Next page button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="text-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default memo(Pagination);
