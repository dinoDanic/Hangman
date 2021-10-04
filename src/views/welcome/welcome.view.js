import React, { useState } from "react";

import { Wrap, Title, Message } from "./welcome.styles";

import Input from "../../theme/ui-components/input/input.component";
import Button from "../../theme/ui-components/button/button.component";

const Welcome = () => {
  const [playValid, setPlayValid] = useState(false);
  return (
    <Wrap>
      <Title>Hang Man</Title>
      <Message>Got name?</Message>
      <Input placeholder="enter name" />
      <Button valid={playValid}>Play</Button>
    </Wrap>
  );
};

export default Welcome;
