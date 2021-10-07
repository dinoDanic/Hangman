import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TheLetter } from "./letter.styles";
import { checkSpecial } from "./utils";

const Letter = ({ letter, ...otherProps }) => {
  const controls = useSelector((state) => state.controls);
  const [variant, setVariant] = useState(null);
  useEffect(() => {
    if (letter === " ") {
      setVariant("space");
      console.log("im space", letter);
    }
    let check = checkSpecial(letter);
    if (check) {
      setVariant("special");
    }
  }, [letter]);
  return (
    <TheLetter variant={variant} {...otherProps}>
      {controls.trueLetters.includes(letter) && letter}
      {variant === "special" && letter}
    </TheLetter>
  );
};

export default Letter;
