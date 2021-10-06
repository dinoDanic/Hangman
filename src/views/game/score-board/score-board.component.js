import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getScores } from "../../../api";
import notePageImg from "../../../img/paperNote.svg";
import { scoreBoardAnimation } from "../../../theme/animations";

import { Wrap, Title, Paper, Loading } from "./score-board.styles";

const ScoreBoard = () => {
  const [state, setState] = useState([]);
  const [boardX, setBoardX] = useState("-150%");
  const scoreBoard = useSelector((state) => state.controls.scoreBoard);

  useEffect(() => {
    setBoardX(scoreBoard ? "0" : "-100%");
  }, [scoreBoard]);

  useEffect(() => {
    const loadScores = async () => {
      try {
        const respond = await getScores();
        const data = respond.data;
        console.log(data);
        if (data) setState(data);
        else return;
      } catch (error) {
        console.log(error.message);
      }
    };
    loadScores();
  }, []);

  const boardAnimation = {
    initial: { x: "-150%", rotate: -50 },
    animate: {
      x: scoreBoard ? "-2%" : "-150%",
      rotate: scoreBoard ? -3 : -50,
    },
    exit: { opacity: 0 },
  };

  return (
    <Wrap
      variants={boardAnimation}
      animate="animate"
      initial="initial"
      transition={{ type: "spring", stiffness: "50" }}
      exit="exit"
    >
      <Paper>
        {state.length > 0 && <Title>Score Board</Title>}
        {state.length === 0 && <Loading>Loading</Loading>}
      </Paper>
    </Wrap>
  );
};

export default ScoreBoard;
