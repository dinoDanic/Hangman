import userActionType from "./user.actionType";

export const setUser = (userName) => ({
  type: userActionType.SET_USER,
  payload: userName,
});

export const setWin = (state) => ({
  type: userActionType.SET_WIN,
  payload: state,
});
export const setLose = (state) => ({
  type: userActionType.SET_LOSE,
  payload: state,
});
