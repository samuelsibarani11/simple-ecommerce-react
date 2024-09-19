import { Button } from "../Elements/Button";
import { InputForm } from "../Elements/Input/index";
import { useRef, useEffect, useState } from "react";
import { login } from "../../service/auth.service";

export const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  // objek yang menyimpan data tentang apa yang terjadi ketika ada interaksi pengguna.
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="">
      <form onSubmit={handleLogin}>
        <InputForm
          label="Username"
          type="text"
          placeholder={"Jane Doe"}
          name="username"
          ref={usernameRef}
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
        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
      </form>
    </div>
  );
};
