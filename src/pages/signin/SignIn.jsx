import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./SignIn.css";
import Input from "../../component/inputs/Input";
import inputAtribut from "../../component/inputs/inputAtribut";
import { useAuth } from "../../hooks/AuthContext";
import Length from "../../component/inputs/length";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    try {
      const user = await login({ email: data.email, password: data.password });

      const from = location.state?.from?.pathname;
      navigate(from || `/profile/${user.username}`, { replace: true });
    } catch (err) {
      if (err) {
        err.errors;
      } else {
        setError("root", { type: "server", message: "Connection error" });
      }
    }
  };

  const visible = inputAtribut.filter(
    (atr) => atr.name === "username" || atr.name === "email",
  );

  let userMinMax = Length(3, 20);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign In</h1>
          {visible.map((atr) => (
            <Input
              key={atr.name}
              register={register}
              errors={errors}
              atr={atr}
              minMax={userMinMax}
            />
          ))}
          {errors.root && <span className="error">{errors.root.message}</span>}
          <div className="signin-tab">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
