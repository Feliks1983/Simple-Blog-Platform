import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { deleteArticle } from "../../api/articles";
import ConfirmModal from "../../component/modal/ConfirmModal";

export default function ArticleActions({ article, slug }) {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const isAuthor =
    isAuthenticated && article?.author?.username === user?.username;
  if (!isAuthor) return null;

  const handleDelete = async () => {
    setIsDelete(true);
    setDeleteError(null);
    try {
      await deleteArticle(user.token, slug);
      navigate("/");
    } catch (err) {
      setDeleteError((err));
      setIsDelete(false);
    }
  };

  return (
    <>
      <Link
        to={`/articles/${slug}/edit`}
      >
        <div className="ion-edit" /> Edit
      </Link>
      <button
        onClick={() => setOpen(true)}
      >
        <div/> Delete
      </button>
      <ConfirmModal
        isOpen={isOpen}
        onDelete={handleDelete}
      />
    </>
  );
}
