import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRendomQuote } from "../../redux/data/data.actions";

import { Wrap } from "./game.styles";

import Stickman from "./stickman/stickman.component";
import Word from "./word/word.component";

const Game = () => {
  const play = useSelector((state) => state.controls.play);
  const content = useSelector((state) => state.data.content);
  const [trueLetters, setTrueLetters] = useState([]);
  const [falseLetters, setFalseLetters] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRendomQuote());
  }, [dispatch]);

  useEffect(() => {
    const keyDown = (e) => {
      if (!content) return;
      const { key, keyCode } = e;
      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (content.includes(letter)) {
          if (!trueLetters.includes(letter)) {
            setTrueLetters((trueLetters) => [...trueLetters, letter]);
            console.log(trueLetters);
          } else {
            console.log("same letter");
          }
        } else {
          if (!falseLetters.includes(letter)) {
            setFalseLetters((trueLetters) => [...trueLetters, letter]);
          } else {
            console.log("no letter");
          }
        }
      }
    };
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, [content, falseLetters, play, trueLetters]);

  return (
    <Wrap>
      {content && (
        <>
          <Stickman />
          <Word word={content.toLowerCase()} trueLetters={trueLetters} />
        </>
      )}
      {!content && <p>loading</p>}
    </Wrap>
  );
};

export default Game;
