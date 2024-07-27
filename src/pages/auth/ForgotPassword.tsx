import AuthActions from "@/components/ui/AuthActions";
import AuthFormWrapper from "@/components/ui/AuthFormWrapper";

function ForgotPassword() {
  return (
    <AuthFormWrapper title="Forgot password">
      <AuthActions />
    </AuthFormWrapper>
  );
}

export default ForgotPassword;
