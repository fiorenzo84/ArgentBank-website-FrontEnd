import "./styles/main.scss";
import Routes from "./routes/routes";
import {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {useDispatch} from "react-redux";
import {restoreUserSession} from "./redux/actions/sessionActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      dispatch(restoreUserSession(token));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
