import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./../signin/SignIn.css";
import Input from "../../component/inputs/Input";
import inputAtribut from "../../component/inputs/inputAtribut";
import { useAuth } from "../../hooks/AuthContext";
import Length from '../../component/inputs/length'

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
     if (err) {
      err.errors;
     } else {
       setError("root", { type: "server", message: "Connection error" });
     }
   }
 };

 let minMax = Length(6, 40);
 const validatePassword = (value) => value === password || "Passwords do not match"
 console.log(minMax);
 console.log(validatePassword);

  const visible = inputAtribut.filter(
    (atr) =>
      atr.name === "username" ||
      atr.name === "email" ||
      atr.name === "password" ||
      atr.name === "repeatPassword",
  );

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
              minMax={minMax}
              validatePassword={validatePassword}
            />
          ))}
          {errors.name && <span className="error">{errors.name.message}</span>}
            <input
              className="signup-checkbox"
              type="checkbox"
              {...register("agree", { required: true })}
            />
            I agree to the terms
          {errors.agree && (
            <span className="error">You must agree before continuing</span>
          )}

          {errors.root && <span className="error">{errors.root.message}</span>}

          <div className="signin-tab">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </div>

          <p>
            Already have an account? <Link to="/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
