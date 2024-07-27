import AuthActions from "@/components/ui/AuthActions";
import AuthFormWrapper from "@/components/ui/AuthFormWrapper";

function Register() {
  return (
    <div>
      <AuthFormWrapper title="register">
        <AuthActions />
      </AuthFormWrapper>
    </div>
  );
}

export default Register;
