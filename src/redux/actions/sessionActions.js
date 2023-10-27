import {URL_LOGIN, URL_PROFILE} from "../../api/apiUrls";
import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  RESTORE_USER_SESSION,
} from "../actions/types";
import axios from "axios";
import {getToken} from "../../utils/tokenUtils";

export const loginUser = (email, password, rememberMe) => {
  return async (dispatch) => {
    try {
      const loginResponse = await axios.post(
        URL_LOGIN,
        {email, password},
        {headers: {"Content-Type": "application/json"}}
      );

      const token = loginResponse.data.body.token;
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

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

      dispatch({type: LOGIN_SUCCESS, payload: profileResponse.data.body});
    } catch (error) {
      let errorMessage;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage =
          error.response.data.message === "Error: User not found!"
            ? "Identifiants incorrects. Veuillez réessayer."
            : error.response.data.message;
      } else {
        errorMessage =
          "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
      }
      dispatch({type: LOGIN_FAILURE, payload: errorMessage});
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    // Remove the token if it exists.
    const token = getToken();

    if (token) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }

    dispatch({type: LOGOUT});
  };
};

export const restoreUserSession = (token) => {
  return async (dispatch) => {
    try {
      // Use the token to retrieve the user's details
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

      // Dispatch the action with the user's details
      dispatch({
        type: RESTORE_USER_SESSION,
        payload: profileResponse.data.body,
      });
    } catch (error) {
      console.error("Error Details:", error.response.data);
      // check status 401 and deconnect if true
      if (error.response && error.response.status === 401) {
        dispatch(logoutUser());
      }
    }
  };
};
