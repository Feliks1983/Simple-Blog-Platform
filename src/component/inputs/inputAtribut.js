

export const inputAtribut = [
  {
    type: "text",
    name: "username",
    placeholder: "Username",
    required: "Username is required",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    required: "Invalid email address",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  {
    type: "text",
    name: "avatar",
    placeholder: "Avatar image (URL)",
    required: "Введите валидный URL",
    pattern: {
      value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
      message: "Введите валидный URL",
    },
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    required: "Password is required",
  },
  {
    type: "password",
    name: "repeatPassword",
    placeholder: "Repeat Password",
    required: "Please repeat your password",
  },
  {
    type: "text",
    name: "title",
    placeholder: "Title",
  },
  {
    type: "text",
    name: "shortDescrition",
    placeholder: "Short descrition",
  },
];

export default inputAtribut;
