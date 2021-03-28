import React from "react";

function Input({ type, name, label, value, onChange }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        type={type ?? "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
