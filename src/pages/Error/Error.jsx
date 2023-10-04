import "./error.scss";
import Footer from "../../layouts/footer/Footer";
import {Link} from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="errorPage">
        <h1>Erreur la page n'existe pas !</h1>
        <Link className="edit-button" to="/">
          Revenir à l'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}
