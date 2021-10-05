import React from "react";
import { useDispatch } from "react-redux";
import { Wrap, Title, Message, Buttons } from "./game-over.styles";

import Button from "../../../theme/ui-components/button/button.component";
import { getRendomQuote, restartGame } from "../../../redux/data/data.actions";
import {
  restartControls,
  setError,
  setLoading,
  setPlay,
} from "../../../redux/controls/controls.actions";

const GameOver = ({ setIsGameOver }) => {
  const dispatch = useDispatch();
  const handleRestart = () => {
    // dispatch(getRendomQuote());
    dispatch(restartControls());
    dispatch(getRendomQuote());
    setIsGameOver(false);
  };
  const handleToManu = () => {
    dispatch(setError(0));
    dispatch(restartGame());
    dispatch(restartControls());
    dispatch(setPlay(false));
  };
  return (
    <Wrap>
      <Buttons>
        <Button onClick={handleRestart}>Restart</Button>
        <Button onClick={handleToManu}>Back to menu</Button>
      </Buttons>
    </Wrap>
  );
};

export default GameOver;
