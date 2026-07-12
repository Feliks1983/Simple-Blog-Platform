import { useEffect, useState } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import BannerArticle from "../../component/banner/BannerArticle";
import Tags from "../../component/page-tag/Tags";
import User from "../../component/user/User";
import Load from "../../component/load/Load";
import Error from "../../component/error/Error";
import ArticleActions from "../../pages/article/ArticleActions";
import { getArticle } from "../../api/articles";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../component/Button";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const data = await getArticle(slug);
        setArticle(data);
      } catch (err) {
        setError(err);
      }
    })();
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
          {isAuthor && (
            <ArticleActions
              slug={article.slug}
              authorUsername={article.author?.username}
            />
          )}
          <Tags users={article.tagList} />
          <div className="info">
            <User users={article} />
            <div className="button-container">
              <Button
                className="button-text"
                slug={article.slug}
                favorited={article.favorited}
                favoritesCount={article.favoritesCount}
              >
                Favorite article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
