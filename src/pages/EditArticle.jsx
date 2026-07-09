import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { getArticle, updateArticle } from "../api/articles";
import Input from "../component/inputs/Input";
import Textarea from "../component/inputs/Textarea";
import PageList from "../component/PageList";
import inputAtribut from '../component/inputs/inputAtribut'
import "./signin/SignIn.css";
import Load from "../component/load/Load";
import Error from "../component/error/Error";

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

const styleWriteWraper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  height: "391px",
  opacity: 1,
  padding: "10px",
};

const styleContainer = {
  display: "flex",
  flexDirection: "column",
  width: "500px",
  height: "371px",
  padding: "24px 10px",
  opacity: "1",
  gap: "16px",
};

export default function EditArticle() {
  const { user } = useAuth();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    getArticle(slug)
      .then((article) => {
        reset({
          title: article.title,
          description: article.description,
          body: article.body,
        });
      })
      .catch(() => setLoadError("Не удалось загрузить статью"));
  }, [slug, reset]);

  const onSubmit = async (data) => {
    try {
      const article = await updateArticle(user.token, slug, data);
      navigate(`/articles/${article.slug}`);
    } catch (err) {
      const message = err?.errors?.root
        ? [].concat(err.errors.root).join(", ")
        : "Не удалось обновить статью";
      setError("root", { message });
    }
  };

  const visible = inputAtribut.filter(
    (atr) => atr.name === "title" || atr.name === "description",
  );
<div>
    if (loading) return <p>Loading...<Load /></p>;
  if (loadError) return <p className="error"><Error /></p>;
</div>


  return (
    <section className="write" style={styleWrite}>
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="write-wraper" style={styleWriteWraper}>
          <div className="write-container" style={styleContainer}>
            {visible.map((atr) => (
              <Input
                key={atr.name}
                register={register}
                errors={errors}
                atr={atr}
              />
            ))}
            <Textarea register={register} errors={errors} />
            {errors.root && (
              <span className="error">{errors.root.message}</span>
            )}
            <PageList />
            <div className="signin-tab">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Publishing..." : "Publish Article"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
