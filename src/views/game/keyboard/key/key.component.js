import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { KeyboardKey, Underline, Wrap } from "./key.styles";

import UnderlineImg from "../../../../img/x.svg";

const Key = ({ keyCode, handleKey }) => {
  // const trueLetters = useSelector((state) => state.controls.trueLetters);
  // const falseLetters = useSelector((state) => state.controls.falseLetters);
  const controls = useSelector((state) => state.controls);
  const [state, setState] = useState("");

  useEffect(() => {
    if (controls.trueLetters.includes(keyCode)) {
      setState("usedPositive");
    }
    if (controls.falseLetters.includes(keyCode)) setState("usedFalse");
  }, [controls, keyCode]);
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
