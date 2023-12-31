import { useState } from "react";
import { data } from "data/dummyImage";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function Slider() {
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
    <div className="container-slider !h-96">
      {/* main slider */}
      <div className="slider">
        {pages?.map((item) => (
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-52 ">
              <img
                src={item.image}
                alt="image slider"
                key={item.id}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-5 justify-between w-full md:w-1/2">
              <div>
                <p>
                  {item.description}
                </p>
              </div>
              <div className="flexBetweenCenter">
                {/* slider current page */}
                <div className="md:flex items-center gap-2 hidden">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={
                        currentPage === index + 1
                          ? "slider-current-active"
                          : "slider-current-inActive !bg-[#d5d5d5]"
                      }
                    ></button>
                  ))}
                </div>
                {/* slider button action */}
                <div className="md:flex items-center gap-3 hidden">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "slider-inActive slider-prev"
                        : "slider-prev"
                    }
                  >
                    <MdOutlineKeyboardArrowLeft size={40} />
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
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 md:hidden">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={
                    currentPage === index + 1
                      ? "slider-current-active"
                      : "slider-current-inActive !bg-[#d5d5d5]"
                  }
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
