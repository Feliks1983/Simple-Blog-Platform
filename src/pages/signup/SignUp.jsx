import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./../signin/SignIn.css";
import Input from "../../component/inputs/Input";
import inputAtribut from "../../component/inputs/inputAtribut";
import { useAuth } from "../../hooks/useAuth";
import Length from "../../component/inputs/length";
import { serverErrors } from "../../component/inputs/serverErrors";

export default function SignUp() {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const user = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log("registerUser response:", user);
      navigate(`/profile/${user.username}`);
    } catch (err) {
      serverErrors(
        err,
        setError,
        visible.map((a) => a.name),
      );
    }
  };

  let userMax = Length(3, 20);
  const minMax = Length(6, 40);
  const validatePassword = (value) =>
    value === password || "Passwords do not match";

  const visibleAtribut = {
    username: userMax,
    password: minMax,
    repeatPassword: { validate: validatePassword },
  };

  const visible = inputAtribut.filter((atr) => atr.visible.includes("sign-up"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign Up</h1>
          {visible.map((atr) => (
            <Input
              key={atr.name}
              register={register}
              errors={errors}
              atr={atr}
              visibleAtribut={visibleAtribut[atr.name]}
            />
          ))}
          {errors.name && <span className="error">{errors.name.message}</span>}
          <div className="wrapper">
            <input
              className="signup-checkbox"
              type="checkbox"
              {...register("agree", { required: true })}
            />
            <span>I agree to the terms</span>
          </div>

          {errors.agree && (
            <span className="error">You must agree before continuing</span>
          )}

          {errors.root && <span className="error">{errors.root.message}</span>}

          <div className="signin-tab">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
