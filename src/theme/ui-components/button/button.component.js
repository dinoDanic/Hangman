import React from "react";
import { MyButton } from "./button.styles";

const Button = ({ valid, children, ...otherProps }) => {
  return (
    <MyButton valid={valid} {...otherProps}>
      {children}
    </MyButton>
  );
};

export default Button;
