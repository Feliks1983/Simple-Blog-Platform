export function serverErrors(err, setError, fields = []) {
  const serverErrors = err?.errors;
  if (!serverErrors) {
    setError("root", { type: "server", message: "Connection error" });
    return;
  }
  const messages = [];
  Object.entries(serverErrors).forEach(([field, messag]) => {
    const text = [].concat(messag).join(", ");
    if (fields.includes(field)) {
      setError(field, { type: "server", message: `${field} ${text}` });
    } else {
      messages.push(`${field} ${text}`);
    }
  });
  if (messages.length) {
    setError("root", { type: "server", message: messages.join("; ") });
  }
}
