import AuthActions from "@/components/ui/AuthActions";
import AuthFormWrapper from "@/components/ui/AuthFormWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Checkbox } from "@mantine/core";
import { useForm } from "react-hook-form";

function Register() {
  const {
    formState: { errors },
    resetField,
    register,
    watch,
  } = useForm();

  return (
    <div>
      <AuthFormWrapper title="register">
        <Input
          register={register("email", { required: "email dau?" })}
          error={errors.email?.message?.toString()}
          name="email"
          reset={resetField}
          value={watch("email")}
          holder="email pls"
          type="email"
          required
        />
        <Input
          register={register("password", { required: "dien mat khau vao" })}
          error={errors.password?.message?.toString()}
          name="password"
          reset={resetField}
          value={watch("password")}
          holder="Password"
          required
          type="password"
        />
        <Input
          register={register("passwordConfirm", {
            required: "xac nhan mat khau di",
          })}
          error={errors.passwordConfirm?.message?.toString()}
          name="passwordConfirm"
          reset={resetField}
          value={watch("passwordConfirm")}
          holder="Re-password"
          required
          type="password"
        />
        <Checkbox
          checked
          disabled
          label="I agree for web owner to sell my data ;)"
        />
        <Button type="submit" className="w-full capitalize">
          register
        </Button>
        <AuthActions />
      </AuthFormWrapper>
    </div>
  );
}

export default Register;
