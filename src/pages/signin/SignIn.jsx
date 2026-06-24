import "./SignIn.css";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign In</h1>
          <input
            className={`signin-empty gap ${errors.username ? "has-error" : ""}`}
            type="text"
            placeholder="Username"
            {...register("username", {
              required: true,
              minLength: { value: 3, message: "Min 3 simvol" },
              maxLength: { value: 20, message: "Max 20 simvol" },
            })}
          />
          <input
            className={`signin-empty gap ${errors.password ? "has-error" : ""}`}
            type="password"
            name="password"
            autoComplete=""
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "Min 6 simvol" },
              maxLength: { value: 40, message: "Max 40 simvol" },
            })}
          />
          <div className="signin-tab">
            <button type="submit">Sign in</button>
          </div>
        </div>
      </div>
    </form>
  );
}
