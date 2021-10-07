import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrap, Img, Time, Text } from "./clock.styles";

import NoteImg from "../../../../img/note2.svg";
import { setTimeScore } from "../../../../redux/data/data.actions";

const Clock = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user.win) {
        dispatch(setTimeScore(time));
      }
      if (user.lose || user.win) return;
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, time, user.lose, user.win]);

  return (
    <Wrap>
      <Img src={NoteImg} />
      <Text>Time</Text>
      <Time>{time}s</Time>
    </Wrap>
  );
};

export default Clock;
