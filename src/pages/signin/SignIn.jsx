import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignIn.css";
import Input from "../../component/inputs/Input";
import inputAtribut from "../../component/inputs/inputAtribut";
import { useAuth } from "../../hooks/useAuth";
import { serverErrors } from "../../component/inputs/serverErrors";
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

  let userMax = Length(3, 20);
  const minMax = Length(6, 40);

  const visibleAtribut = {
    username: userMax,
    password: minMax,
  };

  const visible = inputAtribut.filter((atr) => atr.visible.includes("sign-in"));

  const onSubmit = async (data) => {
    try {
      const user = await login({ email: data.email, password: data.password });
      const from = location.state?.from?.pathname;
      navigate(from || `/profile/${user.username}`, { replace: true });
    } catch (err) {
      serverErrors(
        err,
        setError,
        visible.map((a) => a.name),
      );
    }
  };

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
              visibleAtribut={visibleAtribut[atr.name]}
            />
          ))}
          {errors.root && <span className="error">{errors.root.message}</span>}
          <div className="signin-tab">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
