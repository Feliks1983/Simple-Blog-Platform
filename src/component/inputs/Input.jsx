import InputPassword from "./InputPassword";
import InputName from "./InputName";

export default function Input({register, errors}) {
  return (
    <>
      <InputName register={register} errors={errors} />
      <InputPassword register={register} errors={errors} />
    </>
  );
}
