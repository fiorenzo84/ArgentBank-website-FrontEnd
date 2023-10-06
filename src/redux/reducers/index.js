// The rootReducer combines all reducers. Currently, there's sessionReducer, but more can be added in the future.

import {combineReducers} from "redux";
import sessionReducer from "./sessionReducers";

const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;
