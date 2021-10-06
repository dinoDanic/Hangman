import React, { useEffect } from "react";
import { Wrap, Img, Time, Text } from "./clock.styles";

import NoteImg from "../../../img/note2.png";

const Clock = ({ time }) => {
  return (
    <Wrap>
      <Img src={NoteImg} />
      <Text>Time</Text>
      <Time>{time}s</Time>
    </Wrap>
  );
};

export default Clock;
