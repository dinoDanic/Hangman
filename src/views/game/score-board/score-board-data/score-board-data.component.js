import React, { useEffect, useState } from "react";

import UserScore from "./user-score/user-score.component";

import { Wrap, Title, Table } from "./score-board-data.styles";
import {
  Duration,
  Errors,
  GameScore,
  Length,
  UniqChar,
  UserName,
} from "./user-score/user-score.styles";

const ScoreBoardData = ({ state }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const filterError = state.sort(
      (a, b) => parseFloat(a.errors) - parseFloat(b.errors)
    );

    const filterUniqueCharacters = filterError.sort((a, b) => {
      if (a.errors === b.errors) {
        return parseFloat(b.uniqueCharacters) - parseFloat(a.uniqueCharacters);
      }
      return false;
    });

    const filterLength = filterUniqueCharacters.sort((a, b) => {
      if (a.uniqueCharacters === b.uniqueCharacters) {
        return parseFloat(b.length) - parseFloat(a.length);
      }
      return false;
    });

    const filterTime = filterLength.sort((a, b) => {
      if (a.length === b.length) {
        return parseFloat(a.duration) - parseFloat(b.duration);
      }
      return false;
    });
    setData(filterTime);
  }, [state]);
  return (
    <Wrap>
      <Title>Score Board</Title>
      <Table>
        <UserName>UserName</UserName>
        <Errors>Errors</Errors>
        <UniqChar>Uniq Chars</UniqChar>
        <Length>Length</Length>
        <Duration>Duration</Duration>
        <GameScore>Score</GameScore>
      </Table>
      {data.map((score, i) => (
        <UserScore score={score} i={i} key={i} />
      ))}
    </Wrap>
  );
};

export default ScoreBoardData;
