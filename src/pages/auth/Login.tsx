import AuthActions from "@/components/ui/AuthActions";
import AuthFormWrapper from "@/components/ui/AuthFormWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useForm } from "react-hook-form";

function Login() {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
    control,
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthFormWrapper title="login">
        <Input
          register={register("email", { required: "dm email cua may dau?" })}
          error={errors.email?.message?.toString()}
          name="email"
          reset={resetField}
          holder="email pls"
          type="email"
          control={control}
          required
        />
        <Input
          register={register("password", { required: "dm dien mat khau vao" })}
          error={errors.password?.message?.toString()}
          name="password"
          reset={resetField}
          control={control}
          holder="Password"
          required
          type="password"
        />
        <Button type="submit" className="w-full capitalize">
          login
        </Button>
        <AuthActions />
      </AuthFormWrapper>
    </form>
  );
}

export default Login;
