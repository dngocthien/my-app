import '../index.css';
import React from "react";

export default function Input({ label, id, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-lg font-medium mb-10">{label} sss</label>
      <input id={id} {...props} className="border p-2 w-full rounded" />
    </div>
  );
}