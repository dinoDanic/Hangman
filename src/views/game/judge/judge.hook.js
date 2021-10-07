import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRendomQuote } from "../../../redux/data/data.actions";
import { setLose, setWin } from "../../../redux/user/user.actions";
import { checkWin } from "../utils";

const useJudge = () => {
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
    console.log("checking win");
    if (checkWin(data.content, controls.trueLetters) === "win") {
      dispatch(setWin(true));
    }
  }, [controls, data.content, dispatch]);
};

export default useJudge;
