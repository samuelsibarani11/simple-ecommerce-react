import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayouts";

export const LoginPage = () => {
  return (
    // AuthLayout = membuat posisi untuk form register
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
