import AuthActions from "@/components/ui/AuthActions";
import AuthFormWrapper from "@/components/ui/AuthFormWrapper";

function Register() {
  return (
    <div>
      <AuthFormWrapper title="register">
        <AuthActions to="login" />
      </AuthFormWrapper>
    </div>
  );
}

export default Register;
