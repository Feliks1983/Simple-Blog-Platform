export default function Error({ error, message }) {
  const text = error?.errors
    ? error.errors
    : error?.message || message || "Something went wrong";

  return (
    <div className="error-message" style={{ color: "red", margin: "20px" }}>
      {text}
    </div>
  );
}
