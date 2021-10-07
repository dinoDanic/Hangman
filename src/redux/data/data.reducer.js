import dataActionsTypes from "./data.actionsType";

const INITIAL_STATE = {
  content: "",
  time: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionsTypes.SET_DATA:
      return { ...state, ...action.payload };

    case dataActionsTypes.RESET_DATA:
      return {
        ...state,
        content: "",
      };
    case dataActionsTypes.SET_TIME:
      return {
        ...state,
        time: action.payload * 1000,
      };
    default:
      return state;
  }
};

export default dataReducer;
