import { useForm } from "react-hook-form";
import "../pages/signin/SignIn.css";
import './Setting.css'

export default function Setting() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { username: "eni9mu5", email: "" },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="setting">
      
      <div className="setting-form">
        <h1>Your Setting</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin">
            <div className="signin-container">
              <input
                className={`signin-empty gap ${errors.username ? "signin-error" : ""}`}
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
              />
              <input
                className={`signin-empty gap ${errors.email ? "signin-error" : ""}`}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              <input
                className={`signin-empty gap ${errors.newPassword ? "signin-error" : ""}`}
                type="password"
                placeholder="new password"
                {...register("newPassword", {
                  required: false,
                  minLength: { value: 6, message: "Min 6 simvol" },
                  maxLength: { value: 40, message: "Max 40 simvol" },
                })}
              />
              <input
                className={`signin-empty gap ${errors.avatarUrl ? "signin-error" : ""}`}
                type="text"
                placeholder="avatar url"
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
      </div>
    </div>
  );
}
