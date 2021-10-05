import * as api from "../../api";
import dataActionsTypes from "./data.actionsType";

export const getRendomQuote = () => async (dispatch) => {
  try {
    const respond = await api.rendomQuote();
    const data = await respond.data;
    dispatch({
      type: dataActionsTypes.SET_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
