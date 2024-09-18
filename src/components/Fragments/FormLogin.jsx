import { Button } from "../Elements/Button";
import { InputForm } from "../Elements/Input/Index";

export const FormLogin = () => {
  // objek yang menyimpan data tentang apa yang terjadi ketika ada interaksi pengguna.
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/products";
  };
  return (
    <div className="">
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder={"example@gmail.com"}
          name="email"
        />

        <InputForm
          label="Password"
          type="password"
          placeholder={"*****"}
          name="password"
        />

        <Button classname="bg-blue-600 w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
