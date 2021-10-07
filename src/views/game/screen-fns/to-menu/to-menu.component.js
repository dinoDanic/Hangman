import React from "react";
import { useDispatch } from "react-redux";

import { Wrap, HomeArrow, PointerArrow, Back } from "./to-menu.styles";
import HomeArrowImg from "../../../../img/arrow4.svg";
import PointerArrowImg from "../../../../img/arrow3.svg";

import {
  newGame,
  setLoading,
  setPlay,
} from "../../../../redux/controls/controls.actions";

const ToMenu = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(newGame());
      dispatch(setPlay(false));
    }, 500);
  };
  return (
    <Wrap>
      <HomeArrow src={HomeArrowImg} onClick={handleBack} />
      <PointerArrow src={PointerArrowImg} />
      <Back>Back</Back>
    </Wrap>
  );
};

export default ToMenu;
