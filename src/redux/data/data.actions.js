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
      dispatch({
        type: controlsActionType.SET_ERROR_MESSAGE,
        payload: `Something went wrong with fetching Api qoute. Message: ${error.message}`,
      });
    }
  }, 2000);
};

export const restartGame = () => async (dispatch) => {
  dispatch({
    type: dataActionsTypes.RESET_DATA,
  });
};

export const sendScoreData = (scoreData) => async (dispatch) => {
  try {
    const respond = await api.sendScoreData(scoreData);
    return respond;
  } catch (error) {
    dispatch({
      type: controlsActionType.SET_ERROR_MESSAGE,
      payload: `Something went wrong with sending score data. Message: ${error.message}`,
    });
  }
};

export const setTimeScore = (time) => ({
  type: dataActionsTypes.SET_TIME,
  payload: time,
});
