import { useEffect, useState } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import person from "../../../public/assets/icons/person.svg";
import BannerArticle from "../../component/banner/BannerArticle";
import Tags from "../../component/page-tag/Tags";
import User from "../../component/user/User";
import Load from "../../component/load/Load";
import Error from "../../component/error/Error";
import ArticleActions from "./ArticleActions";
import { getArticle } from "../../api/articles";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError("Slug not found");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await getArticle(slug);
        setArticle(data);
      } catch (err) {
        setError(
          err.errors
        );
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  if (loading)
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
  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-page">
      <div className="article-baner">
        <BannerArticle article={article} />
        <div className="article-page_container">
          <div className="article-page_text">
            <Markdown>{article.description}</Markdown>
          </div>
          <ArticleActions article={article} slug={slug} />
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
