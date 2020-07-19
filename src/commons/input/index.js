import React from "react";

import "./styles.scss";

export default function Input(props) {
  const {labelClass, label, name, type, placeholder, value, inputClass, onChange} = props;
  return (
    <div className="input_container">
      <label className={`label ${labelClass}`}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={`input ${inputClass}`}
        onChange={onChange}
      />
    </div>
  );
}
