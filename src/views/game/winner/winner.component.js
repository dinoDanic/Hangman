import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  restartControls,
  setScoreBoard,
} from "../../../redux/controls/controls.actions";
import {
  getRendomQuote,
  sendScoreData,
} from "../../../redux/data/data.actions";

import Button from "../../../theme/ui-components/button/button.component";

import { Sending, Wrap } from "./winner.styles";

const Winner = ({ setIsGameWin, setTime, winnerData }) => {
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleNewGame = () => {
    dispatch(restartControls());
    dispatch(getRendomQuote());
    setIsGameWin(false);
    dispatch(setScoreBoard(false));
    setTime(0);
  };
  const handleBoard = () => {
    dispatch(setScoreBoard());
    setTime(0);
  };
  useEffect(() => {
    const sendData = async () => {
      setIsSending(true);
      const respond = await dispatch(sendScoreData(winnerData));
      setTimeout(() => {
        if (respond.status === 201) {
          setIsSending(false);
          setSendSuccess(true);
        } else {
          console.log("error with sending data");
        }
      }, 1000);
    };
    sendData();
  }, []);
  return (
    <Wrap>
      <Sending>
        {isSending && <p>Sending Score Data</p>}
        {sendSuccess && !isSending && <p>Score Data Sent!</p>}
      </Sending>
    </Wrap>
  );
};

export default Winner;
