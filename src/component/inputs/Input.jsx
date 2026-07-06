export default function Input({
  register,
  errors,
  atr,
  minMax,
  validatePassword,
  userMinMax
}) {
  return (
    <>
      <input
        className={`signin-empty ${errors[atr.name] ? "has-error" : ""}`}
        type={atr.type || "text"}
        placeholder={atr.placeholder}
        autoComplete=""
        {...register(atr.name, {
          required: atr.required, pattern: atr.pattern,
          ...(atr.name === 'username' ? userMinMax : {}),
          ...(atr.name === "password" ? minMax : {}),
          ...(atr.name === "repeatPassword" ? { validate: validatePassword } : {}),
        } 
        )}
      />

      {errors[atr.name] && <span className="error">{errors[atr.name].message}</span>}
    </>
  );
}
