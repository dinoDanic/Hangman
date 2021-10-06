import React from "react";
import { useDispatch } from "react-redux";
import repeatImg from "../../../../img/repeat.svg";
import ArrowImg from "../../../../img/arrow2.svg";
import { Wrap, Img, Text, Arrow } from "./restart.styles";
import { newGame } from "../../../../redux/controls/controls.actions";
import { getRendomQuote } from "../../../../redux/data/data.actions";

const Restart = ({ setTime }) => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(newGame());
    dispatch(getRendomQuote());
    setTime(0);
  };
  return (
    <Wrap>
      <Text>Restart</Text>
      <Arrow src={ArrowImg} />
      <Img
        src={repeatImg}
        whileHover={{ rotate: 180, scale: 1.1 }}
        whileTap={{ rotate: 240, scale: 1.2 }}
        onClick={handleReset}
      />
    </Wrap>
  );
};

export default Restart;
