import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate, logout } from "../../features/post/createSlice";
import "../../pages/signin/SignIn.css";
import "./Setting.css";
import InputName from "../../component/inputs/InputName";
import InputEmail from "../../component/inputs/InputEmail";
import InputComment from "../../component/inputs/InputComment";

export default function Setting() {
  const dispatch = useDispatch();

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

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("userUpdate");
  };

  return (
    <div className="setting">
      <div className="setting-form">
        <h1>Your Setting</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin">
            <div className="signin-container">
              <InputName register={register} errors={errors} />
              <InputEmail register={register} errors={errors} />
              <div className="signin-empty_comment">
                <InputComment register={register} errors={errors} />
              </div>
              <input
                className={`signin-empty ${errors.avatarUrl ? "signin-error" : ""}`}
                type="text"
                placeholder="Avatar image (URL)"
                {...register("avatarurl", {
                  pattern: /^https?:\/\/[\w\\-]+(\.[\w\\-]+)+[/#?]?.*$/,
                })}
              />
              <div className="signin-tab">
                <button type="submit">Update Setting</button>
              </div>
            </div>
          </div>
        </form>
        <div className="signin-tab_logout">
          <button onClick={onLogout}>Or click here logout</button>
        </div>
      </div>
    </div>
  );
}
