import React from "react";
import {
  Wrap,
  UserName,
  Errors,
  Length,
  UniqChar,
  Duration,
} from "./user-score.styles";

const UserScore = ({ score, i }) => {
  const { userName, errors, length, uniqueCharacters, duration } = score;
  return (
    <Wrap>
      <UserName>
        {i + 1}. {userName}
      </UserName>
      <Errors>{errors}</Errors>
      <UniqChar>{uniqueCharacters}</UniqChar>
      <Length>{length}</Length>
      <Duration>{Math.round(duration / 1000)}</Duration>
    </Wrap>
  );
};

export default UserScore;
