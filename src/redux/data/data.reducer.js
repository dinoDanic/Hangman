import dataActionsTypes from "./data.actionsType";

const INITIAL_STATE = {};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionsTypes.SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
