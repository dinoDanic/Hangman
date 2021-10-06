import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getScores } from "../../../api";

import ScoreBoardData from "./score-board-data/score-board-data.component";

import { Wrap, Rules, Paper, Loading } from "./score-board.styles";

const ScoreBoard = () => {
  const [state, setState] = useState([]);
  const scoreBoard = useSelector((state) => state.controls.scoreBoard);

  useEffect(() => {
    const loadScores = async () => {
      try {
        const respond = await getScores();
        const data = respond.data;
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
        {state.length > 0 && <ScoreBoardData state={state} />}
        {state.length === 0 && <Loading>Loading</Loading>}
        <Rules>
          Rules <br />
          Errors > Uniq Chars > Length > Duration
        </Rules>
      </Paper>
    </Wrap>
  );
};

export default ScoreBoard;
