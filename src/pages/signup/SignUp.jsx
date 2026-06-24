import { useForm } from "react-hook-form";
import "./../signin/SignIn.css";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });


  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign Up</h1>
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
            className={`signin-empty gap ${errors.email ? "has-error" : ""}`}
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
          <input
            className={`signin-empty gap ${errors.repeatPassword ? "has-error" : ""}`}
            type="password"
            name="password"
            autoComplete=""
            placeholder="Repeat Password"
            {...register("repeatPassword", {
              required: true,
              minLength: { value: 6, message: "Min 6 simvol" },
              maxLength: { value: 40, message: "Max 40 simvol" },
            })}
          />
          <label>
            <input
              className="signup-checkbox"
              type="checkbox"
              {...register("agree", { required: true })}
            />
          </label>
          <div className="signin-tab">
            <button type="submit">Sign up</button>
          </div>
        </div>
      </div>
    </form>
  );
}
