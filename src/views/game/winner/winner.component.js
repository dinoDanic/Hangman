import React from "react";
import { useDispatch } from "react-redux";
import {
  restartControls,
  setScoreBoard,
} from "../../../redux/controls/controls.actions";
import { getRendomQuote } from "../../../redux/data/data.actions";

import Button from "../../../theme/ui-components/button/button.component";

import { Wrap } from "./winner.styles";

const Winner = ({ setIsGameWin }) => {
  const dispatch = useDispatch();
  const handleNewGame = () => {
    dispatch(restartControls());
    dispatch(getRendomQuote());
    setIsGameWin(false);
    dispatch(setScoreBoard(false));
  };
  const handleBoard = () => {
    dispatch(setScoreBoard());
  };
  return (
    <Wrap>
      <Button onClick={handleNewGame}>New Game</Button>
      <Button onClick={handleBoard}>Score Board</Button>
    </Wrap>
  );
};

export default Winner;
