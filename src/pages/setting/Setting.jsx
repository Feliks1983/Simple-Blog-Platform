import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../pages/signin/SignIn.css";
import "./Setting.css";
import Input from "../../component/inputs/Input";
import { useAuth } from "../../hooks/AuthContext";
import inputAtribut from "../../component/inputs/inputAtribut";
import Textarea from "../../component/inputs/Textarea";

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
        bio: user.bio || "",
      });
    }
  }, [user, reset]);

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
      if (err) {
        err.errors;
      } else {
        setError("root", {
          message: "Failed to update profile. Please try again.",
        });
      }
    }
  };

  const onLogout = () => {
    logout();
    navigate("/sign-in");
  };

  const visible = inputAtribut.filter(
    (atr) =>
      atr.name === "username" || atr.name === "email" || atr.name === "avatar",
  );

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
                />
              ))}
              <Textarea register={register} errors={errors} />
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
