import controlsActionType from "./controls.actionTypes";

export const setPlay = (state) => ({
  type: controlsActionType.SET_PLAY,
  payload: state,
});

export const addError = () => ({
  type: controlsActionType.ADD_ERROR,
  payload: 1,
});

export const setError = (number) => ({
  type: controlsActionType.SET_ERROR,
  payload: number,
});

export const addTrueLetter = (letter) => ({
  type: controlsActionType.ADD_TRUE_LETTER,
  payload: letter,
});
export const addFalseLetter = (letter) => ({
  type: controlsActionType.ADD_FALSE_LETTER,
  payload: letter,
});

export const setLoading = (state) => ({
  type: controlsActionType.SET_LOADING,
  payload: state,
});

export const restartControls = () => ({
  type: controlsActionType.RESTART_CONTROLS,
});

export const setScoreBoard = (state) => ({
  type: controlsActionType.SET_BOARD,
  payload: state,
});
