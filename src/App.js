import "./styles/main.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/routes";
import {Provider} from "react-redux";
import store from "./redux/store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
