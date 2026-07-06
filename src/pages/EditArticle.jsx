import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleForm from "../component/ArticleForm";
import { getArticle, updateArticle } from "../api/articles";
import { useAuth } from "../hooks/AuthContext";

export default function EditArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    getArticle(slug)
      .then((data) => {
         setArticle(data);
          setLoading(false);
      })
      .catch((err) => {
          setLoadError(formatApiErrors(err));
          setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (article && user && article.author?.username !== user.username) {
      navigate(`/articles/${slug}`);
    }
  }, [article, user, slug, navigate]);

  const onSubmit = async (data) => {
    try {
      const updated = await updateArticle(user.token, slug, data);
      navigate(`/articles/${updated.slug}`);
    } catch (err) {
      throw new Error((err));
    }
  };

  if (loading) return <div className="container page">Loading...</div>;
  if (loadError) return <div className="container page error">{loadError}</div>;

  return (
    <div className="editor-page">
            <ArticleForm
              defaultValues={{
                title: article.title,
                description: article.description,
                body: article.body,
              }}
              onSubmit={onSubmit}
              submitLabel="Update Article"
            />
    </div>
  );
}
