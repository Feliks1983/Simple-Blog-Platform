export default function Length(min, max) {
  return {
    minLength: { value: `${min}`, message: `Min ${min} simbol` },
    maxLength: { value: `${max}`, message: `Max ${max} simbol` },
  };
}
