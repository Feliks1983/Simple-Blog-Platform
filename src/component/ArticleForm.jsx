import { useForm } from "react-hook-form";
import { createSlice, createAction, nanoid } from "@reduxjs/toolkit";
import { useNavigate, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import PageList from "../component/PageList";
import "./../pages/signin/SignIn.css";
import Input from "../component/inputs/Input";
import Textarea from "../component/inputs/Textarea";
import inputAtribut from "../component/inputs/inputAtribut";

const styleWriteWraper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  height: "auto",
  opacity: 1,
  padding: "10px",
};

const styleContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  height: "auto",
  padding: "24px 10px",
  opacity: "1",
  gap: "16px",
};

const visible = inputAtribut.filter(
  (atr) => atr.name === "title" || atr.name === "description",
);
console.log("visible inputs:", visible);
export default function ArticleForm({
  onSubmit,
  submitLabel = "Article",
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

const submitHandler = async (data) => {
  try {
    await onSubmit(data);
  } catch (err) {
    const rawMessage = err?.errors?.body?.join(", ") || err?.message || "";
    const message = rawMessage.includes("failed")
      ? "Статья с таким заголовком уже существует. Попробуйте другой заголовок."
      : rawMessage || "Что-то пошло не так.";
    setError("root", { message });
  }
};

  return (
    <form onSubmit={handleSubmit(submitHandler)} noValidate>
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
          {errors.root && <span className="error">{errors.root.message}</span>}
          <PageList />
          <div className="signin-tab">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Save Post" : submitLabel}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
