import Markdown from "react-markdown";
import User from "../user/User";

export default function BannerArticle({ article }) {
  return (
    <div className="article-wrapper">
      <div className="article-text">
        <div className="article-text_p">
          <Markdown>{article?.title ?? ""}</Markdown>
        </div>
        <div className="user-info_baner">
          <User users={article} />
        </div>
      </div>
    </div>
  );
}
