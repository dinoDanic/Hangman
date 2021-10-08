import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRendomQuote } from "../redux/data/data.actions";
import { setLose, setWin } from "../redux/user/user.actions";
import { checkWin } from "../views/game/utils";

export const useJudge = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.controls.errors);
  const data = useSelector((state) => state.data);
  const controls = useSelector((state) => state.controls);

  useEffect(() => {
    dispatch(getRendomQuote());
  }, [dispatch]);

  useEffect(() => {
    if (errors > 5) {
      dispatch(setLose(true));
    }
  }, [dispatch, errors]);

  useEffect(() => {
    if (checkWin(data.content, controls.trueLetters) === "win") {
      dispatch(setWin(true));
    }
  }, [controls, data.content, dispatch]);
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
