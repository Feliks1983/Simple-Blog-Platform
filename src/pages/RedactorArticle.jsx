import { useForm } from "react-hook-form";
import PageList from "../component/PageList";
import "./../pages/signin/SignIn.css";

const styleWrite = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1160px",
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

export default function RedactorArticle() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="write-wraper" style={styleWrite}>
      <div className="write-container" style={styleContainer}>
        <input
          className={`signin-empty ${errors.title ? "has-error" : ""}`}
          type="text"
          placeholder="Title"
          autoComplete=""
          {...register("title", {
            required: true,
            minLength: { value: 3, message: "Min 3 simvol" },
            maxLength: { value: 20, message: "Max 20 simvol" },
          })}
        />
        <input
          className={`signin-empty ${errors.shortDescription ? "has-error" : ""}`}
          type="text"
          placeholder="Short discrition"
          autoComplete=""
          {...register("shortDescription", {
            required: true,
            minLength: { value: 3, message: "Min 3 simvol" },
            maxLength: { value: 20, message: "Max 20 simvol" },
          })}
        />
        <input
          className={`signin-empty ${errors.inputYuorText ? "signin-error" : ""}`}
          type="text"
          placeholder="Input yuor text"
          {...register("comment", {
            required: true,
          })}
        />
        <PageList />
      </div>
    </div>
  );
}
