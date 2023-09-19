import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Error from "../pages/Error/Error";
// Ajustez les chemins d'importation en fonction de votre structure de dossier

export default function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Error />} />
      {/* Ajoutez d'autres routes ici */}
    </Routes>
  );
}
