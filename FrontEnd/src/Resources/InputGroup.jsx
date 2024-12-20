/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const InputGroup = ({ id, label, type, value, onChange, required = false }) => {
  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputGroup;