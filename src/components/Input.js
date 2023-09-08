import React from "react";
import "../assets/styles/Header.scss";
import { type } from "@testing-library/user-event/dist/type";

const Input = ({ className, type, placeholder, onChange, onClick, value }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      value={value}
    />
  );
};

export default Input;
