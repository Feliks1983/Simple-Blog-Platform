import "./Post.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import User from "../User.jsx";
import Button from "../Button.jsx";

export default function Post(props) {
  let users = props.user
  
  return (
    <>
      <div className="page-component" key={users.slug}>
        <div className="page-heading">
          <User user={users} />
          <Button />
        </div>
        <div className="page-content">
          <div className="page-content_text-semibold">
            <MarkdownPreview source={`## ${users.title ?? ""}`} />
          </div>
          <div className="page-content_regular">
            <MarkdownPreview source={users.description ?? ""} />
          </div>
          <div className="page-tags">
            {(users.tagList || []).map((tag) => (
              <div className="page-tag" key={tag}>
                <button>{tag}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
