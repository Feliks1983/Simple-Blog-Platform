import "./SignIn.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loadUser, userUpdate } from "../../features/post/createSlice";
import Input from "./../../component/inputs/Input";

export default function SignIn() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const userData = {
      username: data.username,
      email: data.email,
      comment: data.comment,
      img: data.avatarurl,
      password: data.password,
    };

    localStorage.setItem("userUpdate", JSON.stringify(userData));
    dispatch(userUpdate(userData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign In</h1>
          <Input register={register} errors={errors} />
          <div className="signin-tab">
            <button type="submit">Sign in</button>
          </div>
        </div>
      </div>
    </form>
  );
}
