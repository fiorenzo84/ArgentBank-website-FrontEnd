import {useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {restoreUserSession, logoutUser} from "../redux/actions/sessionActions";
import {getToken} from "./tokenUtils";

function SessionRestorer() {
  const dispatch = useDispatch();

  // control of the token if the user for x reason deletes it manually
  const handleClickEvent = useCallback(() => {
    const token = getToken();
    if (!token) {
      console.warn("No token found.");
      dispatch(logoutUser());
    }
  }, [dispatch]);

  useEffect(() => {
    // Check the presence of the token when mounting the component
    const token = getToken();
    if (token) {
      dispatch(restoreUserSession(token));
    } else {
      console.warn("No token found.");
      dispatch(logoutUser());
    }

    // Add the click event handler
    document.addEventListener("click", handleClickEvent);

    // Cleanup: Remove event handler when component is unmounted
    return () => {
      document.removeEventListener("click", handleClickEvent);
    };
  }, [handleClickEvent, dispatch]);

  return null;
}

export default SessionRestorer;
