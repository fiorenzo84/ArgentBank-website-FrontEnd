import axios from "axios";
import {UPDATE_USERNAME_SUCCESS, UPDATE_USERNAME_FAILURE} from "./types";
import {URL_PROFILE} from "../../api/apiUrls";

export const updateUsername = (userId, newUsername) => {
  return async (dispatch) => {
    try {
      // Récupérez le token du localStorage ou sessionStorage
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      // Vérifiez si le token est défini
      if (!token) {
        console.error("Token is not found");
        throw new Error("Token is not found");
      }

      // Envoyez la requête avec le token
      const response = await axios.put(
        URL_PROFILE,
        {userName: newUsername},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Sent Username:", newUsername);
      // Si la requête est réussie, dispatchez l'action de succès
      dispatch({type: UPDATE_USERNAME_SUCCESS, payload: response.data});
    } catch (error) {
      console.error(
        "Error Details:",
        error.message || (error.response && error.response.data)
      );
      dispatch({
        type: UPDATE_USERNAME_FAILURE,
        payload: error.message || (error.response && error.response.data),
      });
    }
  };
};
