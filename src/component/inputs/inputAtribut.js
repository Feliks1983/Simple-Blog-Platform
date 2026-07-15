export const inputAtribut = [
  {
    type: "text",
    name: "username",
    placeholder: "Username",
    required: "Username is required",
    visible: ["sign-up", "setting"],
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
    visible: ["sign-in", "sign-up", "setting"],
  },
  {
    type: "text",
    name: "avatar",
    placeholder: "Avatar image (URL)",
    required: "Введите валидный URL",
    pattern: {
      value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
      message: "Введите валидный URL",
    },
    visible: ["setting"],
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    required: "Password is required",
    visible: ["sign-up", "sign-in"],
  },
  {
    type: "password",
    name: "newPassword",
    placeholder: "New Password",
    required: "Password is required",
    visible: ["setting"],
  },
  {
    type: "password",
    name: "repeatPassword",
    placeholder: "Repeat Password",
    required: "Please repeat your password",
    visible: "sign-up",
  },
  {
    type: "text",
    name: "title",
    placeholder: "Title",
    required: "Заголовок обязателен",
    visible: "new-post",
  },
  {
    type: "text",
    name: "description",
    placeholder: "Short description",
    required: "Описание обязательно",
    visible: "new-post",
  },
];

export default inputAtribut;
