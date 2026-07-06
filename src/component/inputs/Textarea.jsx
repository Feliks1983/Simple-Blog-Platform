export default function Textarea({ register, errors }) {
  return (
    <>
      <textarea
        className={`signin-empty signin-empty_comment ${errors.bio ? "signin-error" : ""}`}
        type="text"
        name="body"
        placeholder="Input yuor comment"
        {...register("bio", {
          required: true,
        })}
      ></textarea>
      {errors.bio && <span className="error">{errors.bio.message}</span>}
    </>
  );
}
