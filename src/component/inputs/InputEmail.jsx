export default function InputEmail({ register, errors }) {
  return (
    <input
      className={`signin-empty ${errors.email ? "has-error" : ""}`}
      type="text"
      placeholder="Email"
      autoComplete=""
      {...register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      })}
    />
  );
}