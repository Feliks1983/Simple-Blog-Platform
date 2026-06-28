export default function InputComment({ register, errors }) {
  return (
    <input
      className={`signin-empty ${errors.comment ? "signin-error" : ""}`}
      type="text"
      placeholder="Input yuor comment"
      {...register("comment", {
        required: true,
      })}
    />
  );
}