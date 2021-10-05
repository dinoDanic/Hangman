import React from "react";
import Letter from "./letter/letter.component";
import { Wrap, OneSentance, OneWord, Words } from "./word.styles";

const Word = ({ word, trueLetters }) => {
  word.toLowerCase();
  return (
    <Wrap className="wordWrap">
      <Words>
        {/* {word?.split(".").map((oneSentance, i) => {
          return (
            <OneSentance key={i} className="oneSentance">
              {oneSentance.split(" ").map((sentance, i) => (
                <OneWord key={i} className="oneWord">
                  {sentance.split("").map((letter, i) => (
                    <Letter key={i} letter={letter} trueLetters={trueLetters} />
                  ))}
                </OneWord>
              ))}
            </OneSentance>
          );
        })} */}
        {word?.split(" ").map((oneWord, i) => {
          return (
            <OneWord key={i}>
              {oneWord.split("").map((letter, i) => (
                <Letter key={i} letter={letter} trueLetters={trueLetters} />
              ))}
            </OneWord>
          );
        })}
      </Words>
    </Wrap>
  );
};

export default Word;
