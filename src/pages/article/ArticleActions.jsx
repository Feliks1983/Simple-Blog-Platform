import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { deleteArticle } from "../../api/articles";
import ConfirmModal from "../../component/modal/ConfirmModal";
import './ArticleActions.css'

export default function ArticleActions({ slug, authorUsername }) {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const isAuthor = isAuthenticated && authorUsername === user?.username;
  if (!isAuthor) return null;

  const handleDelete = () => {
    setDeleteError(null);
    try {
      deleteArticle(user.token, slug);
      navigate("/");
    } catch (err) {
      console.error("Delete article error:", err);
      setDeleteError("Не удалось удалить статью");
      setOpen(false)
    }
  };

  return (
    <div className="article-action">
      <Link to={`/articles/${slug}/edit`}>
        <button type="button" className="article-edit">
          Edit
        </button>
      </Link>
      <button
        type="button"
        className="article-delete"
        onClick={() => setOpen(true)}
      >
        <div /> Delete
      </button>
      {deleteError && <span className="error">{deleteError}</span>}
      <ConfirmModal isOpen={isOpen} onDelete={handleDelete} />
    </div>
  );
}
