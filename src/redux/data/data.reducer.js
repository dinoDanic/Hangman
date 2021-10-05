import dataActionsTypes from "./data.actionsType";

const INITIAL_STATE = {
  content: "",
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionsTypes.SET_DATA:
      return action.payload;

    case dataActionsTypes.RESET_DATA:
      return {
        ...state,
        content: "",
      };
    default:
      return state;
  }
};

export default dataReducer;
