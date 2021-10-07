import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../../../redux/controls/controls.actions";

import { sendScoreData } from "../../../redux/data/data.actions";
import { loadAnimation } from "../../../theme/animations";
import { getUniqueChars } from "../utils";

import { Sending, Wrap, Load } from "./winner.styles";

const Winner = ({ setIsGameWin, setTime, time }) => {
  const data = useSelector((state) => state.data);
  const user = useSelector((state) => state.user);
  const controls = useSelector((state) => state.controls);
  const [dataSent, setDataSent] = useState(false);
  const [isSending, setIsSending] = useState(true);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [winnerData, setWinnerData] = useState({});
  const [endMessage, setEndMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setWinnerData({
      quoteId: data._id,
      length: data.length,
      uniqueCharacters: getUniqueChars(data.content),
      userName: user.userName,
      errors: controls.errors,
      duration: data.time,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, controls, user]);

  useEffect(() => {
    if (!winnerData.userName || !winnerData.duration) return;
    if (dataSent) return;
    const sendData = async () => {
      setIsSending(true);
      try {
        const respond = await dispatch(sendScoreData(winnerData));
        if (!respond) return;
        setTimeout(() => {
          if (respond.status === 201) {
            setIsSending(false);
            setSendSuccess(true);
            setEndMessage("Score data sent");
          }
        }, 1000);
      } catch (error) {
        dispatch(
          setErrorMessage(
            `Problem with sending data. Message: ${error.message} `
          )
        );
        setIsSending(false);
        setSendSuccess(true);
        setEndMessage("Sending Failed..");
      }
    };
    sendData();
    setDataSent(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winnerData]);

  return (
    <Wrap>
      <Sending>
        {isSending && (
          <Load variants={loadAnimation} animate="animate" initial="initial">
            Sending score data
          </Load>
        )}
        {sendSuccess && !isSending && <div>{endMessage}</div>}
      </Sending>
    </Wrap>
  );
};

export default Winner;
