import React from "react";
import Button from "../../../theme/ui-components/button/button.component";
import ScoreBoard from "../score-board/score-board.component";

import { Wrap } from "./winner.styles";

const Winner = () => {
  return (
    <Wrap>
      <Button>New Game</Button>
      <Button>Score Board</Button>
    </Wrap>
  );
};

export default Winner;
