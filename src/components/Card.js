import React from "react";

export default function Card({ children }) {
  return (
    <div className="bg-light_bg dark:bg-dark_bg shadow rounded-xl p-6 transition-colors">
      {children}
    </div>
  );
}
