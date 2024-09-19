/* eslint-disable react/prop-types */
import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded-lg w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});
