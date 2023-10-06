import axios from "axios";
import {UPDATE_USERNAME_SUCCESS, UPDATE_USERNAME_FAILURE} from "./types";
import {URL_PROFILE} from "../../api/apiUrls";
import {getToken} from "../../utils/tokenUtils";

export const updateUsername = (userId, newUsername) => {
  return async (dispatch) => {
    try {
      const token = getToken();

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
      // If the request is successful, dispatch the success action.
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
