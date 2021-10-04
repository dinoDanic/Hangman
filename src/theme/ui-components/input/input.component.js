import React from "react";
import { MyInput } from "./input.styles";
const Input = ({ ...otherProps }) => {
  return <MyInput {...otherProps} />;
};

export default Input;
