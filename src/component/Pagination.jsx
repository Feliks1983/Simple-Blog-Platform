export default function Pagination({ pageNumbers, page, onhandlePageClick }) {
  const visiblePages = pageNumbers.slice(0, 7);

  return (
    <ul className="pagination">
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
    </ul>
  );
}
