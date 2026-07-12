import { createArticle } from "../api/articles";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ArticleForm from "../component/ArticleForm";

const styleWrite = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  opacity: "1",
  fontFamily: "Titillium",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "40px",
  letterSpacing: "0%",
  textAlign: "center",
  verticalAlign: "middle",
  marginTop: "88px",
};

export default function NewPost() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const article = await createArticle(user.token, data);
    navigate(`/articles/${article.slug}`);
  };

  return (
    <section className="write" style={styleWrite}>
      <h2>New Post</h2>
      <ArticleForm onSubmit={onSubmit} submitLabel="Publish Article" />
    </section>
  );
}
