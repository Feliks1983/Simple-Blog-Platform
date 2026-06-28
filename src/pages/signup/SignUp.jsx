import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import "./../signin/SignIn.css";
import InputName from "../../component/inputs/InputName";
import InputEmail from "./../../component/inputs/InputEmail";
import InputPassword from "../../component/inputs/InputPassword";
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign Up</h1>
          <InputName register={register} errors={errors} />
          <InputEmail register={register} errors={errors} />
          <InputPassword register={register} errors={errors} />
          <input
            className={`signin-empty ${errors.repeatPassword ? "has-error" : ""}`}
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
