import React from "react";
import { Wrap } from "./screen-fns.styles";

import Clock from "./clock/clock.component";
import CountErrors from "./count-errros/count-errors.component";
import Restart from "./restart/restart.component";

const ScreenFns = ({ time, setTime }) => {
  return (
    <Wrap>
      <Clock time={time} />
      <CountErrors />
      <Restart setTime={setTime} />
    </Wrap>
  );
};

export default ScreenFns;
