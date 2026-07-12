import { useState, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import { favoriteArticle } from "../api/articles";

export default function Button({ slug, favorited, favoritesCount }) {
  const { user, isAuthenticated } = useAuth();
  const [liked, setLiked] = useState(!!favorited);
  const [count, setCount] = useState(favoritesCount ?? 0);
  const [pending, setPending] = useState(false);
  const request = useRef(false);

  const handleClick = async () => {
    if (!isAuthenticated) return;
    if (request.current) return;

    request.current = true;
    setPending(true);

    const prevLiked = liked;
    const prevCount = count;

    setLiked(!prevLiked);
    setCount(prevLiked ? prevCount - 1 : prevCount + 1);

    try {
      const article = await favoriteArticle(user.token, slug);
      setLiked(article.favorited);
      setCount(article.favoritesCount);
    } catch (err) {
      console.error("Like toggle error:", err);
      setLiked(prevLiked);
      setCount(prevCount);
    } finally {
      setPending(false);
      request.current = false;
    }
  };

  return (
    <button
      className={`button-likes ${liked ? "button-likes_active" : ""}`}
      onClick={handleClick}
      disabled={!isAuthenticated || pending}
      title={!isAuthenticated ? "Войдите, чтобы поставить лайк" : undefined}
    >
      <img
        className="favorite"
        src="/assets/icons/favorite.svg"
        alt="favorite"
      />
      <span>{count}</span>
    </button>
  );
}
