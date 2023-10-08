import { useState } from "react";
import { data } from "data/dummyImage";
import useWindowSize from "hooks/useWindowSize";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function Carousal() {
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useWindowSize();
  const itemsPerPage = width < 580 ? 2 : width < 768 ? 3 : width < 1024 ? 4 : 4;

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
    <div className="container-carousal">
      {/* main carousal */}
      <div className="carousal">
        {pages?.map((item) => (
          <img src={item.image} alt="image carousal" key={item.id} />
        ))}
      </div>

      {/* carousal button action */}
      <div className="carousal-button">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={
            currentPage === 1 ? "carousal-inActive slider-prev" : "slider-prev"
          }
        >
          <MdOutlineKeyboardArrowLeft size={40} />
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={
            currentPage === totalPages
              ? "carousal-inActive  slider-next"
              : "carousal-next"
          }
        >
          <MdOutlineKeyboardArrowRight size={40} />
        </button>
      </div>

      {/* carousal current page */}
      <div className="carousal-current-parent">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "carousal-current-active"
                : "carousal-current-inActive"
            }
          ></button>
        ))}
      </div>
    </div>
  );
}
