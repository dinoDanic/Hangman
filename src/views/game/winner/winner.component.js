import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendScoreData } from "../../../redux/data/data.actions";
import { getUniqueChars } from "../utils";

import { Sending, Wrap } from "./winner.styles";

const Winner = ({ setIsGameWin, setTime, time }) => {
  const data = useSelector((state) => state.data);
  const user = useSelector((state) => state.user);
  const controls = useSelector((state) => state.controls);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [winnerData, setWinnerData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setWinnerData({
      quoteId: data._id,
      length: data.length,
      uniqueCharacters: getUniqueChars(data.content),
      userName: user.userName,
      errors: controls.errors,
      duration: time * 1000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!winnerData.userName) return;
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
  }, [dispatch, winnerData]);

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
