import { FC, useState } from "react";

type PaginationProps = {
  data: {
    current_page: number;
    total_page: number;
    limit: number;
  };
};

export const Pagination: FC<PaginationProps> = ({ data }) => {
  const [page, setPage] = useState(1);

  const nextPage = (action: string) => {
    setPage((prevPage) => (action === "next" ? prevPage + 1 : prevPage - 1));
  };

  const NextPreviousBtn = (action: string, icon: string) => {
    return (
      <div
        className="page-link"
        onClick={() => nextPage(action)}
        style={{ cursor: "pointer" }}
      >
        <i className={`uil ${icon}`} />
      </div>
    );
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${data?.current_page === 1 && "disabled"}`}>
          {NextPreviousBtn("prev", "uil-arrow-left")}
        </li>

        {Array.from({ length: data?.total_page }).map((_, i) => (
          <li
            className={`page-item ${i + 1 === data?.current_page ? "active" : ""
              }`}
            key={i}
          >
            <button className="page-link" onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${data?.total_page === data?.current_page && "disabled"
            }`}
        >
          {NextPreviousBtn("next", "uil-arrow-right")}
        </li>
      </ul>
    </nav>
  );
};
