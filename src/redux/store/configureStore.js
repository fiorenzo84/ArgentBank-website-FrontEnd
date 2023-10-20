// The store holds the app's global state.
// Store created with configureStore, added thunk for async actions.

import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
