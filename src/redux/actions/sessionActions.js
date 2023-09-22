//Les actions sont des objets qui ont généralement deux propriétés : type et payload. Le type décrit le type d'action effectuée, et le payload transporte les données qui doivent être mises à jour dans le store.

// Ici, une action loginUser qui est une fonction asynchrone. Elle tente de se connecter en envoyant une requête POST à /api/login et dispatche soit une action LOGIN_SUCCESS avec les données de l'utilisateur, soit une action LOGIN_FAILURE avec l'erreur, en fonction du résultat de la requête.

import {URL_LOGIN} from "../../constants/apiUrls";
import {LOGIN_SUCCESS} from "../actions/types";
import {LOGIN_FAILURE} from "../actions/types";
import axios from "axios";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        URL_LOGIN,
        {email, password},
        {headers: {"Content-Type": "application/json"}}
      );
      console.log("API Response:", response.data);
      localStorage.setItem("token", response.data.body.token);
      dispatch({type: LOGIN_SUCCESS, payload: response.data});
      return Promise.resolve(response.data); // Résoudre la promesse avec les données de réponse
    } catch (error) {
      console.error("Error Details:", error.response.data);
      dispatch({type: LOGIN_FAILURE, payload: error.response.data});
      return Promise.reject(error); // Rejeter la promesse avec l'erreur
    }
  };
};
