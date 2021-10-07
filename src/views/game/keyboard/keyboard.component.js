import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { KEYS } from "./keys";
import Key from "./key/key.component";

import { Wrap } from "./keyboard.styles";
import {
  addError,
  addFalseLetter,
  addTrueLetter,
} from "../../../redux/controls/controls.actions";

const Keyboard = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.data.content);
  const controls = useSelector((state) => state.controls);

  const keyDown = (e, keyboardKey) => {
    if (!content) return;
    let key;
    let keyCode;
    if (e) {
      key = e.key;
      keyCode = e.keyCode;
    } else {
      key = keyboardKey;
      keyCode = 80;
    }
    if (controls.play && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();
      if (content.toLowerCase().includes(letter)) {
        if (!controls.trueLetters.includes(letter)) {
          dispatch(addTrueLetter(letter));
        } else {
          console.log("same letter");
        }
      } else {
        if (!controls.falseLetters.includes(letter)) {
          dispatch(addFalseLetter(letter));
          dispatch(addError());
        } else {
          console.log("no letter");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, controls]);

  return (
    <Wrap>
      {KEYS.map((key) => {
        return <Key handleKey={keyDown} keyCode={key} key={key} />;
      })}
    </Wrap>
  );
};

export default Keyboard;
