import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="form-control border-0 bg-light px-4"
      style={{ height: "55px" }}
    />
  );
};

export default Input;
