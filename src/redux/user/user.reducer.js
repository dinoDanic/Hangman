import userActionsType from "./user.actionType";

const INITIAL_STATE = {
  userName: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsType.SET_USER:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
