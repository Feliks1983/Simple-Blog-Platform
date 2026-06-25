import Pagination from "../../component/Pagination";
import Post from "../../component/post/Post";
import Saidbar from "../../component/Saidbar";
import "./PageContainer.css";
import { useState, useEffect } from "react";

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
    let ignore = false;
    const fetchUsers = async () => {
      setLoading(true);
      setError(false);
      try {
        const offset = (page - 1) * limit;
        const response = await fetch(
          `${apiUser}?limit=${limit}&offset=${offset}`,
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        if (!ignore) {
          setUsers(data.articles || []);
          setUserCount(data.articlesCount || 0);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message || "no loading");
        }
      }finally {
        if (!ignore) {
          setLoading(false);
        }}
    };
    fetchUsers();
    return () => {
      ignore = true;
    };
  }, [page]);

  const handlePageClick = (e, newPage) => {
    e.preventDefault();
    if (newPage === page) return;
    setPage(newPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (e, i) => i + 1);

  return (
    <div className="page">
      <div className="page-container">
        <Saidbar />
      </div>
      {error && (
        <div className="error-message" style={{ color: "red", margin: "20px" }}>
          {error}
        </div>
      )}
      {loading ? (
        <div className="load">
          <img src="../../../public/assets/icons/refresh.svg" alt="" />
          <span>Loading</span>
        </div>
      ) : (
        <>
          {users.map(
            (
              user,
            ) => (
              <Post key={user.slug} user={user} />
            ),
          )}
        </>
      )}
      <Pagination
        pageNumbers={pageNumbers}
        page={page}
        onhandlePageClick={handlePageClick}
      />
    </div>
  );
}
