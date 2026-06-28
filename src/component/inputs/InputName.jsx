export default function InputName({ register, errors }) {
  return (
    <input
      className={`signin-empty ${errors.username ? "has-error" : ""}`}
      type="text"
      placeholder="Username"
      autoComplete=""
      {...register("username", {
        required: true,
        minLength: { value: 3, message: "Min 3 simvol" },
        maxLength: { value: 20, message: "Max 20 simvol" },
      })}
    />
  );
}