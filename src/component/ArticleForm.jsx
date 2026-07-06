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

const visible = inputAtribut.filter(
  (atr) => atr.name === "title" || atr.name === "shortDescrition",
);

export default function ArticleForm({
  defaultValues = {title: "", description: "", body: "" },
  onSubmit,
  submitLabel = "Article",
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", defaultValues });

  const submitHandler = async (data) => {
    try {
      await onSubmit(data);
    } catch (err) {
      setError("root", {
        message: err?.message || "Something went wrong.",
      });
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
