import React from "react";
import Letter from "./letter/letter.component";
import { Wrap, OneWord, Sentance, Words } from "./word.styles";

const Word = ({ word, trueLetters }) => {
  word.toLowerCase();
  return (
    <Wrap className="wordWrap">
      <Words className="complete">
        {word?.split(".").map((sentance, i) => {
          return (
            <Sentance className="sentance" key={i}>
              {sentance.split(" ").map((oneWord, i) => {
                return (
                  <OneWord className="word" key={i}>
                    {oneWord.split("").map((letter, i) => (
                      <Letter className="letter" key={i} letter={letter} />
                    ))}
                  </OneWord>
                );
              })}
            </Sentance>
          );
        })}
      </Words>
    </Wrap>
  );
};

export default Word;
