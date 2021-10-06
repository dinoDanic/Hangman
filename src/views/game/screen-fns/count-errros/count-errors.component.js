import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NoteImg from "../../../../img/note4.svg";

import { Wrap, Img, Title, ErrorsLeft, HoldInfo } from "./count-errors.styles";

const CountErrors = () => {
  const errors = useSelector((state) => state.controls.errors);
  const countStart = 6;
  const [count, setCount] = useState(countStart);

  useEffect(() => {
    setCount(countStart - errors);
  }, [errors]);

  return (
    <Wrap>
      <Img src={NoteImg} />
      <HoldInfo>
        <Title>Moves Left</Title>
        <ErrorsLeft>{count}</ErrorsLeft>
      </HoldInfo>
    </Wrap>
  );
};

export default CountErrors;
