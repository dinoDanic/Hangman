import userActionType from "./user.actionType";
import userActionsType from "./user.actionType";

const INITIAL_STATE = {
  userName: null,
  win: false,
  lose: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsType.SET_USER:
      return {
        ...state,
        userName: action.payload,
      };
    case userActionType.SET_WIN:
      return {
        ...state,
        win: action.payload,
      };
    case userActionType.SET_LOSE:
      return {
        ...state,
        lose: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
