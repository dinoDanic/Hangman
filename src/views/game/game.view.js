/* eslint-disable no-sparse-arrays */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { Wrap } from "./game.styles";

import Keyboard from "./keyboard/keyboard.component";
import Stickman from "./stickman/stickman.component";
import Word from "./word/word.component";
import PopUp from "../../theme/ui-components/popup/popup.component";
import Loading from "../../theme/ui-components/loading/loading.component";
import Winner from "./winner/winner.component";
import ScreenFns from "./screen-fns/screen-fns.component";

import useJudge from "./judge/judge.hook";

const Game = () => {
  useJudge();
  const content = useSelector((state) => state.data.content);
  const controls = useSelector((state) => state.controls);
  const user = useSelector((state) => state.user);
  const [time, setTime] = useState(0);

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
          <Keyboard />
          {user.lose && (
            <PopUp
              setTime={setTime}
              title="Game Over! ;("
              message="Start over?"
            />
          )}
          {user.win && (
            <PopUp title="You Won! :D" setTime={setTime}>
              <Winner time={time} />
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
