//Les reducers sont des fonctions qui prennent l'état actuel et une action, puis renvoient un nouvel état. Ils sont purs, ce qui signifie qu'ils ne modifient pas l'état actuel, mais renvoient plutôt une copie modifiée de l'état.

// Le reducer sessionReducer gère l'état de la session utilisateur dans l'application, avec les constantes importer pour eviter les fautes de frappes.

//Il commence avec un initialState où l'utilisateur n'est pas authentifié, et il écoute les actions LOGIN_SUCCESS et LOGIN_FAILURE pour mettre à jour l'état de la session en fonction du succès ou de l'échec de la connexion.

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
      console.log("Username from Payload:", action.payload.body.userName); // Log the userName from the payload
      return {
        ...state,
        userData: {
          ...state.userData,
          userName: action.payload.body.userName,
        },
        error: null, // Réinitialisez l'erreur en cas de succès
      };
    default:
      return state;
  }
};

export default sessionReducer;
