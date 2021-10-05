import controlsActionType from "./controls.actionTypes";

const INITIAL_STATE = {
  play: true,
};

const controlsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case controlsActionType.SET_PLAY:
      return {
        ...state,
        play: action.payload,
      };
    default:
      return state;
  }
};

export default controlsReducer;
