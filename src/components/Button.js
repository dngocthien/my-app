import React from "react";

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  ...props
}) {
  const base = "px-4 py-2 font-semibold rounded";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-300 text-black",
    danger: "bg-red-500 text-white",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${disabled && "opacity-50"}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
