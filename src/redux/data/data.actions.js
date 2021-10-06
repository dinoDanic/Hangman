import * as api from "../../api";
import dataActionsTypes from "./data.actionsType";
import controlsActionType from "../controls/controls.actionTypes";

export const getRendomQuote = () => async (dispatch) => {
  dispatch({
    type: controlsActionType.SET_LOADING,
    payload: true,
  });
  setTimeout(async () => {
    try {
      const respond = await api.rendomQuote();
      const data = await respond.data;
      dispatch({
        type: dataActionsTypes.SET_DATA,
        payload: data,
      });
      dispatch({
        type: controlsActionType.SET_LOADING,
        payload: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  }, 500);
};

export const restartGame = () => async (dispatch) => {
  dispatch({
    type: dataActionsTypes.RESET_DATA,
  });
};

export const sendScoreData = (scoreData) => async (dispatch) => {
  console.log(scoreData);
  try {
    const respond = await api.sendScoreData(scoreData);
    console.log(respond);
  } catch (error) {
    console.log(error.message);
  }
};

export const getScores = () => async (dispatch) => {
  try {
    const respond = await api.getScores();
  } catch (error) {
    console.log(error.message);
  }
};
