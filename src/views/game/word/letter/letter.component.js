import React, { useState, useEffect } from "react";
import { TheLetter } from "./letter.styles";
import { checkSpecial } from "./utils";

const Letter = ({ letter, trueLetters }) => {
  const [variant, setVariant] = useState(null);
  useEffect(() => {
    if (letter === " ") {
      setVariant("space");
    }
    let check = checkSpecial(letter);
    if (check) {
      setVariant("special");
    }
    console.log(check);
  }, [letter]);
  return (
    <TheLetter variant={variant}>
      {trueLetters.includes(letter) && letter}
      {variant === "special" && letter}
    </TheLetter>
  );
};

export default Letter;
