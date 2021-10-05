import React, { useEffect, useState } from "react";
import { KeyboardKey, Underline, Wrap } from "./key.styles";

import UnderlineImg from "../../../../img/x.svg";

const Key = ({ keyCode, handleKey, trueLetters, falseLetters }) => {
  const [state, setState] = useState("");
  const [lineColor, setLineColor] = useState("");
  useEffect(() => {
    if (trueLetters.includes(keyCode)) {
      setState("usedPositive");
      setLineColor("red");
    }
    if (falseLetters.includes(keyCode)) setState("usedFalse");
  }, [falseLetters, keyCode, trueLetters]);
  return (
    <Wrap>
      <KeyboardKey variant={state} onClick={() => handleKey(null, keyCode)}>
        {keyCode}
      </KeyboardKey>
      {/* <Underline variant={state} src={UnderlineImg} /> */}
    </Wrap>
  );
};

export default Key;
