import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../pages/signin/SignIn.css";
import "./Setting.css";
import Input from "../../component/inputs/Input";
import { useAuth } from "../../hooks/useAuth";
import inputAtribut from "../../component/inputs/inputAtribut";
import Length from "../../component/inputs/length";
import { serverErrors } from "../../component/inputs/serverErrors";

export default function Setting() {
  const navigate = useNavigate();
  const { user, updateUser, logout } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: user });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
        avatar: user.image || "",
        password: user.password || "",
      });
    }
  }, [user, reset]);

  const visible = inputAtribut.filter((atr) => atr.visible.includes("setting"));
  const minMax = Length(6, 40);
  const userMax = Length(3, 20);
  const visibleAtribut = {
    newPassword: minMax,
    username: userMax,
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        username: data.username,
        email: data.email,
        bio: data.bio,
        image: data.avatar,
      };
      const result = await updateUser(payload);
      navigate(`/profile/${result.username}`);
    } catch (err) {
      serverErrors(
        err,
        setError,
        visible.map((a) => a.name),
      );
    }
  };

  const onLogout = () => {
    logout();
    navigate("/sign-in");
  };

  return (
    <div className="setting">
      <div className="setting-form">
        <h1>Your Setting</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin">
            <div className="signin-container">
              {visible.map((atr) => (
                <Input
                  key={atr.name}
                  register={register}
                  errors={errors}
                  atr={atr}
                  visibleAtribut={visibleAtribut[atr.name]}
                />
              ))}
              {errors.root && (
                <span className="error">{errors.root.message}</span>
              )}
              <div className="signin-tab">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Updating..." : "Update Setting"}
                </button>
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
