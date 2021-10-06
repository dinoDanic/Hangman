import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setPlay, setScoreBoard } from "../../redux/controls/controls.actions";
import { setUser } from "../../redux/user/user.actions";

import { Wrap, Title, Message } from "./welcome.styles";

import Input from "../../theme/ui-components/input/input.component";
import Button from "../../theme/ui-components/button/button.component";
import { welcomeAni } from "../../theme/animations";

const Welcome = () => {
  const dispatch = useDispatch();
  const [playValid, setPlayValid] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setPlayValid(name.length > 0);
  }, [name]);

  const handlePlay = (e) => {
    if (!playValid) return;
    dispatch(setPlay(true));
    dispatch(setUser(name));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleBoard = () => {
    dispatch(setScoreBoard(true));
  };

  return (
    <Wrap variants={welcomeAni} animate="animate" initial="initial" exit="exit">
      <Title>Hang Man</Title>
      <Message>Got name?</Message>
      <Input placeholder="enter name" onChange={handleChange} />
      <Button valid={playValid} onClick={handlePlay}>
        Play
      </Button>
      <Button onClick={handleBoard}>Score Board</Button>
    </Wrap>
  );
};

export default Welcome;
