//Les actions sont des objets qui ont généralement deux propriétés : type et payload. Le type décrit le type d'action effectuée, et le payload transporte les données qui doivent être mises à jour dans le store.

// Ici, une action loginUser qui est une fonction asynchrone. Elle tente de se connecter en envoyant une requête POST à /api/login et dispatche soit une action LOGIN_SUCCESS avec les données de l'utilisateur, soit une action LOGIN_FAILURE avec l'erreur, en fonction du résultat de la requête.

import {URL_LOGIN, URL_PROFILE} from "../../api/apiUrls";
import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  RESTORE_USER_SESSION,
} from "../actions/types";
import axios from "axios";

export const loginUser = (email, password, rememberMe) => {
  return async (dispatch) => {
    try {
      // Connexion de l'utilisateur
      const loginResponse = await axios.post(
        URL_LOGIN,
        {email, password},
        {headers: {"Content-Type": "application/json"}}
      );

      // Stockage du token ( Si l'utilisateur coche "remember me", le token est stocké dans le localStorage, permettant une persistance des données même après la fermeture du navigateur. Sinon, le token est stocké dans le sessionStorage, et sera donc perdu une fois la session du navigateur terminée).
      const token = loginResponse.data.body.token;
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      // Récupération du profil de l'utilisateur
      const profileResponse = await axios.post(
        URL_PROFILE,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Dispatch de l'action avec les détails de l'utilisateur
      dispatch({type: LOGIN_SUCCESS, payload: profileResponse.data.body});

      return Promise.resolve(profileResponse.data.body);
    } catch (error) {
      console.error("Error Details:", error.response.data);
      dispatch({type: LOGIN_FAILURE, payload: error.response.data});
      return Promise.reject(error);
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    // Suppression du token du localStorage si il y est présent
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }

    // Suppression du token du sessionStorage si il y est présent
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
    }

    dispatch({type: LOGOUT}); // Dispatch de l'action déconnexion
  };
};

export const restoreUserSession = (token) => {
  return async (dispatch) => {
    try {
      // Utilisez le token pour récupérer les détails de l'utilisateur
      const profileResponse = await axios.post(
        URL_PROFILE,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Dispatch de l'action avec les détails de l'utilisateur
      dispatch({
        type: RESTORE_USER_SESSION,
        payload: profileResponse.data.body,
      });

      return Promise.resolve(profileResponse.data.body);
    } catch (error) {
      console.error("Error Details:", error.response.data);
      return Promise.reject(error);
    }
  };
};
