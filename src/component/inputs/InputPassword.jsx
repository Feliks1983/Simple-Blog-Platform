export default function InputPassword({ register, errors }) {
  return (
    <input
      className={`signin-empty ${errors.password ? "has-error" : ""}`}
      type="password"
      name="password"
      autoComplete=""
      placeholder="Password"
      {...register("password", {
        required: true,
        minLength: { value: 6, message: "Min 6 simvol" },
        maxLength: { value: 40, message: "Max 40 simvol" },
      })}
    />
  );
}