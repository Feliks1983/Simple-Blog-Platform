import { useState } from "react";
import './Pagination.css'

export default function Pagination({ pageNumbers, page, onhandlePageClick }) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const pagesGroup = 7;
  const totalGroups = Math.ceil(pageNumbers.length / pagesGroup);
  const startIndex = currentGroup * pagesGroup;
  const endIndex = Math.min(startIndex + pagesGroup, pageNumbers.length);
  const visiblePages = pageNumbers.slice(startIndex, endIndex);

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };
  
  const handleNextGroup = () => {
    if (currentGroup < totalGroups - 1) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={handlePrevGroup}
          disabled={currentGroup === 0}
          className="pagination-nav"
        >
          &lt;
        </button>
      </li>
      {visiblePages.map((number) => (
        <li key={number}>
          <a
            href="#"
            className={page === number ? "active" : ""}
            onClick={(e) => onhandlePageClick(e, number)}
          >
            {number}
          </a>
        </li>
      ))}
      <li>
        <button
          onClick={handleNextGroup}
          disabled={currentGroup === totalGroups - 1}
          className="pagination-nav"
        >
           &gt;
        </button>
      </li>
    </ul>
  );
}
