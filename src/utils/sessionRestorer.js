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
    document.addEventListener("click", handleClickEvent);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickEvent);
    };
  }, [handleClickEvent]);

  // session restore + a case where there is a 401 code
  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(restoreUserSession());
    } else {
      console.warn("No token found.");
      dispatch(logoutUser());
    }
  }, [dispatch]);

  return null;
}

export default SessionRestorer;
