import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import {
  newGame,
  setLoading,
  setPlay,
  setScoreBoard,
} from "../../../redux/controls/controls.actions";
import { getRendomQuote } from "../../../redux/data/data.actions";

import { Container, Layer, Content, Title, Message } from "./popup.styles";
import { popContentAnimation } from "../../animations";
import Button from "../button/button.component";

const PopUp = ({ children, title, message, setIsGameWin, setTime }) => {
  const dispatch = useDispatch();
  const handleNewGame = () => {
    dispatch(newGame());
    dispatch(getRendomQuote());
    setTime(0);
  };
  const handleBackToMenu = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(newGame());
      dispatch(setPlay(false));
    }, 500);
  };

  const handleScoreBoard = () => {
    dispatch(setScoreBoard());
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Container>
          <Layer />
          <Content
            variants={popContentAnimation}
            animate="animate"
            initial="initial"
          >
            {title && <Title>{title}</Title>}
            {message && <Message>{message}</Message>}
            {children}
            <Button onClick={handleNewGame}>New Game</Button>
            <Button onClick={handleBackToMenu}>Back to menu</Button>
            <Button onClick={handleScoreBoard}>Score Board</Button>
          </Content>
        </Container>,
        document.getElementById("pop")
      )}
    </>
  );
};

export default PopUp;
