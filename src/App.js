import "./styles/main.scss";
import Routes from "./routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import SessionRestorer from "./utils/sessionRestorer";

// Summary of the authentication implementation:
// 1. If a user doesn't have a token when accessing the app, they are redirected to the login page.
// 2. If a user has a token, they are authenticated and can access the app's features.
// 3. If a user tries to perform an action requiring a valid token and the token is missing or invalid, the API will return an error.

function App() {
  return (
    <Router>
      <SessionRestorer />
      <Routes />
    </Router>
  );
}

export default App;
