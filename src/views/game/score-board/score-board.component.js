import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getScores } from "../../../api";
import {
  setErrorMessage,
  setScoreBoard,
} from "../../../redux/controls/controls.actions";

import ScoreBoardData from "./score-board-data/score-board-data.component";

import { Wrap, Rules, Paper, Loading, CloseBoard } from "./score-board.styles";

const ScoreBoard = () => {
  const dispatch = useDispatch();
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
        dispatch(
          setErrorMessage(
            `Something went wrong with fetching loading scores. Message: ${error.message}`
          )
        );
      }
    };
    loadScores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    dispatch(setScoreBoard(false));
  };

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
          Bonus rules <br />
          Errors > Uniq Chars > Length > Duration
        </Rules>
        <CloseBoard onClick={handleClose}>X</CloseBoard>
      </Paper>
    </Wrap>
  );
};

export default ScoreBoard;
