/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FormLogin } from "../Fragments/FormLogin";

// Link berguna agar ketika berpindah halaman tidak perlu load terlebih dahulu
import { Link } from "react-router-dom";

export const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-3 border p-20 rounded shadow-xl">
        <div className="w-full max-w-xs ">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
          </p>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className=" text-sm py-2 text-center">
        {/* Jika kondisi hanya dua pada Conditional Rendering lebih baik menggunakan ternary  */}
        Don't Have an account?
        <Link to="/register" className=" font-bold text-blue-700 pl-1">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className=" text-sm py-2 text-center">
        {/* Jika kondisi hanya dua pada Conditional Rendering lebih baik menggunakan ternary  */}
        Already Have an account?
        <Link to="/login" className=" font-bold text-blue-700 pl-1">
          Sign In
        </Link>
      </p>
    );
  }
};
