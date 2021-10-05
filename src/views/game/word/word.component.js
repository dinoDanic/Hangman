import React from "react";
import Letter from "./letter/letter.component";
import { Wrap, OneWord, Words } from "./word.styles";

const Word = ({ word, trueLetters }) => {
  word.toLowerCase();
  return (
    <Wrap className="wordWrap">
      <Words>
        {word?.split(" ").map((oneWord, i) => {
          return (
            <OneWord key={i}>
              {oneWord.split("").map((letter, i) => (
                <Letter key={i} letter={letter} />
              ))}
            </OneWord>
          );
        })}
      </Words>
    </Wrap>
  );
};

export default Word;
