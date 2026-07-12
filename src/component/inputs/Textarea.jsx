export default function Textarea({ register, errors }) {
  return (
    <>
      <textarea
        className={`signin-empty signin-empty_comment ${errors.body ? "signin-error" : ""}`}
        type="text"
        name="bio"
        placeholder="Input yuor comment"
        {...register("body", {
          required: true,
        })}
      ></textarea>
      {errors.body && <span className="error">{errors.body.message}</span>}
    </>
  );
}
