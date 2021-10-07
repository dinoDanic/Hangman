import controlsActionType from "./controls.actionTypes";

const INITIAL_STATE = {
  play: false,
  loading: false,
  scoreBoard: false,
  winner: false,
  loser: false,
  errors: 0,
  trueLetters: [],
  falseLetters: [],
  errorMessage: null,
};

const controlsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case controlsActionType.SET_PLAY:
      return {
        ...state,
        play: action.payload,
      };
    case controlsActionType.ADD_ERROR:
      return {
        ...state,
        errors: state.errors + action.payload,
      };
    case controlsActionType.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case controlsActionType.ADD_TRUE_LETTER:
      const newTrue = state.trueLetters;
      newTrue.push(action.payload);
      return {
        ...state,
        trueLetters: newTrue,
      };
    case controlsActionType.ADD_FALSE_LETTER:
      const newFalse = state.falseLetters;
      newFalse.push(action.payload);
      return {
        ...state,
        falseLetters: newFalse,
      };
    case controlsActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case controlsActionType.RESTART_CONTROLS:
      return {
        ...state,
        trueLetters: [],
        falseLetters: [],
        errors: 0,
      };
    case controlsActionType.SET_BOARD:
      if (action.payload === undefined) {
        return {
          ...state,
          scoreBoard: !state.scoreBoard,
        };
      }
      if (action.payload === false) {
        return {
          ...state,
          scoreBoard: action.payload,
        };
      }
      return state;
    case controlsActionType.SET_LOOSER:
      return {
        ...state,
        loser: action.payload,
      };
    case controlsActionType.SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    case controlsActionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default controlsReducer;
