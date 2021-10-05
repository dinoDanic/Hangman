import React, { useEffect } from "react";
import { Wrap, Img, Time, Text } from "./clock.styles";

import NoteImg from "../../../img/note2.png";

const Clock = ({ setTime, time }) => {
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [setTime, time]);
  return (
    <Wrap>
      <Img src={NoteImg} />
      <Text>Time</Text>
      <Time>{time}s</Time>
    </Wrap>
  );
};

export default Clock;
