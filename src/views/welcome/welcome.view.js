import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setErrorMessage,
  setPlay,
  setScoreBoard,
} from "../../redux/controls/controls.actions";
import { setUser } from "../../redux/user/user.actions";

import { Wrap, Title, Message, Img, Form, EnterName } from "./welcome.styles";
import noteImg from "../../img/note2.svg";

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
    e.preventDefault();
    if (!playValid) {
      dispatch(setErrorMessage("Write your name!"));
      return;
    }
    dispatch(setPlay(true));
    dispatch(setUser(name));
    dispatch(setScoreBoard(false));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleBoard = () => {
    dispatch(setScoreBoard());
  };

  return (
    <Wrap variants={welcomeAni} animate="animate" initial="initial" exit="exit">
      <Title>Hang Man</Title>
      <Form onSubmit={handlePlay}>
        <Img src={noteImg} />
        <Message>Name</Message>
        <EnterName>
          <Input placeholder="enter name" onChange={handleChange} />
        </EnterName>
      </Form>
      <Button valid={playValid} type="submit" onClick={handlePlay}>
        Play
      </Button>
      <Button onClick={handleBoard}>Score Board</Button>
    </Wrap>
  );
};

export default Welcome;
