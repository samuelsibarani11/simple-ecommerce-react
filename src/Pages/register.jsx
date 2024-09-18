import { FormRegister } from "../components/Fragments/FormRegister";
import { AuthLayout } from "../components/Layouts/AuthLayouts";
export const RegisterPage = () => {
  
  return (
    // AuthLayout = membuat posisi untuk form register 
    <AuthLayout title="Register" type="register">
      {/* FormRegister = form untuk registrasi */}
      <FormRegister />
    </AuthLayout>
  );
};
