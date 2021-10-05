import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import controlsReducer from "./controls/controls.reducer";
import dataReducer from "./data/data.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  controls: controlsReducer,
  data: dataReducer,
});

export default rootReducer;
