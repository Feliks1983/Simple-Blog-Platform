import { useState, useEffect } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import User from "../user/User.jsx";
import Button from "../Button.jsx";
import Tags from "../page-tag/Tags.jsx";
export default function Post(props) {
  let users = props.user;
  const storageKey = `liked_post_${users.slug}`;

  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
  });

  const initialCount = users.favoritesCount || 0;
  const [favorsCount, setFavorsCount] = useState(
    isLiked ? initialCount + 1 : initialCount,
  );
  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(storageKey, "true");
    }
  }, [isLiked, storageKey]);

  const handleLikeClick = () => {
    if (!isLiked) {
      setFavorsCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };
  return (
    <div className="page-component" key={users.slug}>
      <div className="page-heading">
        <User users={users} />
        <Button
          favorsCount={favorsCount}
          isLiked={isLiked}
          onClick={handleLikeClick}
        />
      </div>
      <div className="page-content">
        <Link to={`/articles/${users.slug}`}>
          <div className="page-content_text-semibold">
            <Markdown>{`## ${users.title ?? ""}`}</Markdown>
          </div>
        </Link>
        <div className="page-content_regular">
          <Markdown>{users.description ?? ""}</Markdown>
        </div>
        <Tags users={users.tagList} />
      </div>
    </div>
  );
}
