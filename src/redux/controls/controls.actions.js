import controlsActionType from "./controls.actionTypes";
import * as api from "../../api";

export const setPlay = (state) => ({
  type: controlsActionType.SET_PLAY,
  payload: state,
});

export const getRendomQuotes = () => async (dispatch) => {
  try {
    const respond = await api.rendomQuote();
    const data = await respond.data;
    dispatch({
      type: controlsActionType.SET_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
