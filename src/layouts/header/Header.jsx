import "./header.scss";
import ArgentBankLogo from "../../assets/images/argentBankLogo.png";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logoutUser} from "../../redux/actions/sessionActions";

export default function Header() {
  const user = useSelector((state) => state.session.userData);
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
  };
  //console.log('User Object:', user);

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
            <>
              <i className="fa fa-user-circle"></i>
              <span className="main-nav-item">
                <Link to="/profile">{user && user.firstName}</Link>
              </span>
              <i className="fa fa-sign-out"></i>
              <Link className="main-nav-item" to="/" onClick={handleSignOut}>
                <i className="fa fa-sign-out-alt"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
