//Les reducers sont des fonctions qui prennent l'état actuel et une action, puis renvoient un nouvel état. Ils sont purs, ce qui signifie qu'ils ne modifient pas l'état actuel, mais renvoient plutôt une copie modifiée de l'état.

// Le reducer sessionReducer gère l'état de la session utilisateur dans l'application, avec les constantes importer pour eviter les fautes de frappes.

//Il commence avec un initialState où l'utilisateur n'est pas authentifié, et il écoute les actions LOGIN_SUCCESS et LOGIN_FAILURE pour mettre à jour l'état de la session en fonction du succès ou de l'échec de la connexion.

import {LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  userData: null,
  error: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
