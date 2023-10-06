// The sessionReducer manages the user session state within the app, using imported constants to avoid typos.
// It starts with an initialState where the user is not authenticated, and listens to actions to update the session state.

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  RESTORE_USER_SESSION,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  userData: null,
  error: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case RESTORE_USER_SESSION:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
    case UPDATE_USERNAME_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
        error: null,
      };
    case UPDATE_USERNAME_SUCCESS:
      console.log("Action Payload:", action.payload); // Log the entire payload
      return {
        ...state,
        userData: {
          ...state.userData,
          userName: action.payload.body.userName,
        },
        error: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
