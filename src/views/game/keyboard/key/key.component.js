import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { KeyboardKey, Wrap } from "./key.styles";

const Key = ({ keyCode, handleKey }) => {
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
    </Wrap>
  );
};

export default Key;
