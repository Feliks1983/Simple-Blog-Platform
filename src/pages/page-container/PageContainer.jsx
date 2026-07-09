import { useState, useEffect } from "react";
import Pagination from "../../component/pagination/Pagination";
import Post from "../../component/post/Post";

import "./PageContainer.css";
import Load from "../../component/load/Load";
import Error from "../../component/error/Error";

const apiUser = `https://realworld.habsida.net/api/articles`;
const limit = 3;
export default function PageContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(userCount / limit));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const offset = (page - 1) * limit;
        const response = await fetch(
          `${apiUser}?limit=${limit}&offset=${offset}`,
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.articles || []);
        setUserCount(data.articlesCount || 0);
        setLoading(false);
      } catch (error) {
        setError(error.message || "no loading");
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  const handlePageClick = (e, newPage) => {
    e.preventDefault();
    if (newPage === page) return;
    setPage(newPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (e, i) => i + 1);

  if (!users)
    return (
      <div>
        <Load />
      </div>
    );
  if (error)
    return (
      <div>
        <Error error={error} />
      </div>
    );

  return (
    <div className="page">
      <div className="page-users">
        {users.map((user) => (
          <Post key={user.slug} user={user} />
        ))}
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        page={page}
        onhandlePageClick={handlePageClick}
      />
    </div>
  );
}
