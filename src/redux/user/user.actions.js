import userActionType from "./user.actionType";

export const setUser = (userName) => ({
  type: userActionType.SET_USER,
  payload: userName,
});
