import React from "react";

export default function Checkbox({ label, id, checked, onChange }) {
  return (
    <label htmlFor={id} className="flex items-center space-x-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4"
      />
      <span>{label}</span>
    </label>
  );
}
