import { combineReducers } from "redux";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  complaints: chatReducer,
});

export default rootReducer;
