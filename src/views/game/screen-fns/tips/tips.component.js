import React from "react";
import { Wrap, Computer, Arrow, Text } from "./tips.styles";

import ComputerImg from "../../../../img/keyboard.svg";
import ArrowImg from "../../../../img/arrow1.svg";

const Tips = () => {
  return (
    <Wrap>
      <Computer src={ComputerImg} />
      <Arrow src={ArrowImg} />
      <Text>
        use keyboard <br /> or mouse
      </Text>
    </Wrap>
  );
};

export default Tips;
