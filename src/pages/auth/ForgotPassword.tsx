import AuthActions from "@/components/ui/AuthActions";
import AuthFormWrapper from "@/components/ui/AuthFormWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const {
    register,
    formState: { errors },
    resetField,
    watch,
    handleSubmit,
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthFormWrapper title="Forgot password">
        <Input
          name="email"
          register={register("email", { required: "pls where is ur email?" })}
          error={errors.email?.message?.toString()}
          holder="ur email"
          required
          reset={resetField}
          type="email"
          value={watch("email")}
        />

        <Button className="w-full" type="submit">
          Send request
        </Button>

        <AuthActions />
      </AuthFormWrapper>
    </form>
  );
}

export default ForgotPassword;
