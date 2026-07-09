export default function Input({
  register,
  errors,
  atr,
  visibleAtribut,
  userMinMax,
}) {
  return (
    <>
      <input
        className={`signin-empty ${errors[atr.name] ? "has-error" : ""}`}
        type={atr.type || "text"}
        placeholder={atr.placeholder}
        autoComplete=""
        {...register(atr.name, {
          required: atr.required,
          pattern: atr.pattern,
          visibleAtribut, userMinMax
        })}
      />

      {errors[atr.name] && (
        <span className="error">{errors[atr.name].message}</span>
      )}
    </>
  );
}
