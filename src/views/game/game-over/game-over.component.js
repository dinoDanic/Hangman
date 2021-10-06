import React from "react";
import { useDispatch } from "react-redux";
import { Wrap, Title, Message, Buttons } from "./game-over.styles";

import Button from "../../../theme/ui-components/button/button.component";
import { getRendomQuote, restartGame } from "../../../redux/data/data.actions";
import {
  restartControls,
  setError,
  setPlay,
} from "../../../redux/controls/controls.actions";

const GameOver = ({ setIsGameOver, setTime }) => {
  const dispatch = useDispatch();

  return <Wrap></Wrap>;
};

export default GameOver;
