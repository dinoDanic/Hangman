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
import { getRendomQuote } from "../../redux/data/data.actions";
import { setWin, setLose } from "../../redux/user/user.actions";

import Keyboard from "./keyboard/keyboard.component";
import Stickman from "./stickman/stickman.component";
import CountErrors from "./screen-fns/count-errros/count-errors.component";
import Word from "./word/word.component";
import PopUp from "../../theme/ui-components/popup/popup.component";
import Loading from "../../theme/ui-components/loading/loading.component";
import Clock from "./screen-fns/clock/clock.component";
import Winner from "./winner/winner.component";
import ScreenFns from "./screen-fns/screen-fns.component";

const Game = () => {
  const content = useSelector((state) => state.data.content);
  const data = useSelector((state) => state.data);
  const controls = useSelector((state) => state.controls);
  const errors = useSelector((state) => state.controls.errors);
  const user = useSelector((state) => state.user);
  const [time, setTime] = useState(0);
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
    setWinnerData({
      quoteId: data._id,
      length: data.length,
      uniqueCharacters: getUniqueChars(content),
      userName: user.userName,
      errors: errors,
      duration: time * 1000,
    });
    if (checkWin(content, controls.trueLetters) === "win") {
      dispatch(setWin(true));
    }
  }, [errors, content, data, controls, time, dispatch]);

  useEffect(() => {
    if (errors > 5) {
      dispatch(setLose(true));
    }
  }, [dispatch, errors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user.lose || user.win) return;
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, user.lose, user.win]);

  return (
    <Wrap>
      {content && !controls.loading && (
        <>
          <Stickman />
          <ScreenFns time={time} setTime={setTime} />
          <Word word={content.toLowerCase()} />
          <Keyboard handleKey={keyDown} />
          {user.lose && (
            <PopUp
              setTime={setTime}
              title="Game Over! ;("
              message="Start over?"
            />
          )}
          {user.win && (
            <PopUp title="You Won! :D" setTime={setTime}>
              <Winner winnerData={winnerData} />
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
