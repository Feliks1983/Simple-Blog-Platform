import "./Post.css";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import User from "../user/User.jsx";
import Button from "../Button.jsx";
import Tags from "../page-tag/Tags.jsx";
export default function Post(props) {
  let users = props.user;
  return (
    <div className="page-component" key={users.slug}>
      <div className="page-heading">
        <User users={users} />
        <Button
          slug={users.slug}
          favorited={users.favorited}
          favoritesCount={users.favoritesCount}
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
