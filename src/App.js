import "./App.css";
import "./main.scss";
//import TestComponent from "./components/TestComponent";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/routes";

function App() {
  return (
    <Router>
      <div>
        <Routes />
        {/* <TestComponent /> */}
      </div>
    </Router>
  );
}

export default App;
