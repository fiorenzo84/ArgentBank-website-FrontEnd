import Footer from "../../layouts/footer/Footer";
import "./signin.scss";
import ArgentBankLogo from "../../assets/images/argentBankLogo.png";
import {Link} from "react-router-dom";
export default function SignIn() {
  return (
    <div>
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      page SignIn
      <Footer />
    </div>
  );
}
