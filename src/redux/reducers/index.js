// Le rootReducer combine tous les reducers individuels en un seul reducer.Ici, un seul reducer, sessionReducer, qui est associé à la clé session dans l'état global.

import {combineReducers} from "redux";
import sessionReducer from "./sessionReducers";

const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;
