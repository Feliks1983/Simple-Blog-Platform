import { useEffect, useState } from "react";
import "./Article.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import person from "../../../public/assets/icons/person.svg";
import BannerArticle from "../../component/banner/BannerArticle";
import Tags from "../../component/page-tag/Tags";
import User from "../../component/user/User";
import Load from "../../component/load/Load";
import Error from "../../component/error/Error";
import ArticleActions from "../../pages/article/ArticleActions";
import { getArticle } from "../../api/articles";
import { useAuth } from "../../hooks/AuthContext";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

 useEffect(() => {
   let ignore = false;
   (async () => {
     const data = await getArticle(slug);
     if (!ignore) setArticle(data);
   })();
   return () => {
     ignore = true;
   };
 }, [slug]);

  if (!article)
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

    const isAuthor = user?.username === article.author?.username;

  return (
    <div className="article-page">
      <div className="article-baner">
        <BannerArticle article={article} />
        <div className="article-page_container">
          <div className="article-page_text">
            <Markdown>{article.description ?? ""}</Markdown>
            <Markdown>{article.body ?? ""}</Markdown>
          </div>
          <ArticleActions
            slug={article.slug}
            authorUsername={article.author?.username}
          />
          <Tags users={article.tagList} />
          
          <div className="info">
            <User users={article} />
            <div className="button-container">
              <button className="button-text">Favorite article</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
