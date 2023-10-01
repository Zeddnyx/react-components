import { useState } from "react";
import { data } from "utils/dummyImage";
import { iconArrow } from "configs/images";

export default function PaginationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  // Calculate the index of the first and last item to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pages = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-slider">
      <div className="slider">
        {pages?.map((item) => (
          <img src={item.image} alt="image slider" key={item.id} />
        ))}
      </div>

      <div className="slider-button">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={
            currentPage === 1 ? "slider-inActive slider-prev" : "slider-prev"
          }
        >
          <img src={iconArrow} alt="arrow" />
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={
            currentPage === totalPages
              ? "slider-inActive  slider-next"
              : "slider-next"
          }
        >
          <img src={iconArrow} alt="arrow" />
        </button>
      </div>

      <div className="slider-current-parent">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "slider-current-active"
                : "slider-current-inActive"
            }
          ></button>
        ))}
      </div>
    </div>
  );
}
