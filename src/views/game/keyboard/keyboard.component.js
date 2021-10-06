import React from "react";
import { KEYS } from "./keys";
import Key from "./key/key.component";

import { Wrap } from "./keyboard.styles";

const Keyboard = ({ handleKey }) => {
  return (
    <Wrap>
      {KEYS.map((key) => {
        return <Key handleKey={handleKey} keyCode={key} key={key} />;
      })}
    </Wrap>
  );
};

export default Keyboard;
