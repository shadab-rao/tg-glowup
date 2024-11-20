import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from "react-i18next";

export function Paginate({
  currentPage,
  totalPages,
  handlePageChange,
  records,
  totalList,
}) {
//   const { t, i18n } = useTranslation();
  const displayRange = 3;

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - displayRange);
    let endPage = Math.min(totalPages, currentPage + displayRange);

    // Add ellipsis at the beginning if required
    if (startPage > 1) {
      pageNumbers.push("...");
    }

    // Add page numbers within the range
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis at the end if required
    if (endPage < totalPages) {
      pageNumbers.push("...");
    }

    return pageNumbers;
  };

  return (
    <>
      <span>
        Page {currentPage} of {totalPages}, showing {records?.length} records
        out of {totalList} total
      </span>
      <nav aria-label="Page navigation example">
        <ul className="pagination mb-2 mb-sm-0">
          <li
            className={`d-flex page-item ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              style={{
                color: currentPage === 1 ? "#c9bcbc" : "",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                pointerEvents: "auto",
              }}
            >
              {/* <i className="fa-solid fa-angle-left" /> */}
              <FontAwesomeIcon
                icon={faAnglesLeft}
              />
            </button>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                color: currentPage === 1 ? "#c9bcbc" : "",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                pointerEvents: "auto",
              }}
            >
              {/* <i className="fa-solid fa-angle-left" /> */}
              <FontAwesomeIcon
                icon={faAngleLeft}
              />
            </button>
          </li>
          {getPageNumbers().map((pageNumber, index) => (
            <li
              className={`page-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
              key={index}
            >
              {pageNumber === "..." ? (
                <span className="page-link">{pageNumber}</span>
              ) : (
                <button
                  className="page-link"
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )}
            </li>
          ))}
          <li
            className={`d-flex page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                color: currentPage === totalPages ? "#c9bcbc" : "",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                pointerEvents: "auto",
              }}
            >
              {/* <i className="fa-solid fa-angle-right" /> */}
              {/* <FontAwesomeIcon icon={faAngleRight} /> */}
              <FontAwesomeIcon
                icon={faAngleRight}
              />
            </button>
            <button
              className="page-link ms-2"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              style={{
                color: currentPage === totalPages ? "#c9bcbc" : "",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                pointerEvents: "auto",
              }}
            >
              {/* <i className="fa-solid fa-angle-right" /> */}
              {/* <FontAwesomeIcon icon={faAnglesRight} /> */}
              <FontAwesomeIcon
                icon={faAnglesRight}
              />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
