/* eslint-disable no-sparse-arrays */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { checkWin, getUniqueChars } from "./utils";
import { Wrap } from "./game.styles";
import {
  addError,
  addTrueLetter,
  addFalseLetter,
} from "../../redux/controls/controls.actions";
import { getRendomQuote, sendScoreData } from "../../redux/data/data.actions";

import Keyboard from "./keyboard/keyboard.component";
import Stickman from "./stickman/stickman.component";
import CountErrors from "./count-errros/count-errors.component";
import Word from "./word/word.component";
import GameOver from "./game-over/game-over.component";
import PopUp from "../../theme/ui-components/popup/popup.component";
import Loading from "../../theme/ui-components/loading/loading.component";
import Winner from "./winner/winner.component";
import Clock from "./clock/clock.component";

const Game = () => {
  const content = useSelector((state) => state.data.content);
  const data = useSelector((state) => state.data);
  const controls = useSelector((state) => state.controls);
  const user = useSelector((state) => state.user);
  const [time, setTime] = useState(0);
  const [isGameWin, setIsGameWin] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winnerData, setWinnerData] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRendomQuote());
  }, [dispatch]);

  const keyDown = (e, keyboardKey) => {
    if (!content) return;
    let key;
    let keyCode;
    // ako je event ili ako je keyboard mouse
    if (e) {
      key = e.key;
      keyCode = e.keyCode;
    } else {
      key = keyboardKey;
      keyCode = 80;
    }
    if (controls.play && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();
      if (content.includes(letter)) {
        if (!controls.trueLetters.includes(letter)) {
          dispatch(addTrueLetter(letter));
        } else {
          console.log("same letter");
        }
      } else {
        if (!controls.falseLetters.includes(letter)) {
          dispatch(addFalseLetter(letter));
          dispatch(addError());
        } else {
          console.log("no letter");
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, controls]);

  useEffect(() => {
    setIsGameOver(controls.errors > 5);
    setWinnerData({
      quoteId: data._id,
      length: data.length,
      uniqueCharacters: getUniqueChars(content),
      userName: user.userName,
      errors: controls.errors,
      duration: time * 1000,
    });
    if (checkWin(content, controls.trueLetters) === "win") {
      setIsGameWin(true);
      dispatch(sendScoreData(winnerData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, content, data, , user, time, dispatch]);

  return (
    <Wrap>
      {content && !controls.loading && (
        <>
          <Stickman />
          <Word word={content.toLowerCase()} />
          <Keyboard handleKey={keyDown} />
          <CountErrors />
          <Clock setTime={setTime} time={time} />
          {isGameOver && (
            <PopUp title="Game Over! ;(" message="Start over?">
              <GameOver setIsGameOver={setIsGameOver} />
            </PopUp>
          )}
          {isGameWin && (
            <PopUp title="You Won! :D">
              <Winner setIsGameWin={setIsGameWin} />
            </PopUp>
          )}
        </>
      )}
      <AnimatePresence exitBeforeEnter>
        {controls.loading && <Loading key="loading" />}
      </AnimatePresence>
    </Wrap>
  );
};

export default Game;
