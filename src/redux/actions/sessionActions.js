//Les actions sont des objets qui ont généralement deux propriétés : type et payload. Le type décrit le type d'action effectuée, et le payload transporte les données qui doivent être mises à jour dans le store.

// Ici, une action loginUser qui est une fonction asynchrone. Elle tente de se connecter en envoyant une requête POST à /api/login et dispatche soit une action LOGIN_SUCCESS avec les données de l'utilisateur, soit une action LOGIN_FAILURE avec l'erreur, en fonction du résultat de la requête.

import {URL_LOGIN, URL_PROFILE} from "../../constants/apiUrls";
import {LOGIN_SUCCESS} from "../actions/types";
import {LOGIN_FAILURE} from "../actions/types";
import {LOGOUT} from "./types";
import axios from "axios";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      // Connexion de l'utilisateur
      const loginResponse = await axios.post(
        URL_LOGIN,
        {email, password},
        {headers: {"Content-Type": "application/json"}}
      );

      // Stockage du token
      const token = loginResponse.data.body.token;
      localStorage.setItem("token", token);

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
    localStorage.removeItem("token");
    dispatch({type: LOGOUT}); // Dispatche de  l'action déconnexion
  };
};
