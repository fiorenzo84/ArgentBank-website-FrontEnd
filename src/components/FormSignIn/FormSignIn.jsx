//connectez ses composants React à notre store Redux en utilisant useDispatch pour dispatcher des actions et useSelector pour accéder à l'état du store.

import "./formsignin.scss";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/actions/sessionActions";
import {Navigate} from "react-router-dom";

export default function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, rememberMe))
      .then((response) => {
        setError("");
        if (rememberMe) {
          localStorage.setItem("token", response.data.body.token);
        } else {
          sessionStorage.setItem("token", response.data.body.token);
        }
      })
      .catch((err) => {
        let errorMessage;
        if (err.response && err.response.data && err.response.data.message) {
          errorMessage =
            err.response.data.message === "Error: User not found!"
              ? "Identifiants incorrects. Veuillez réessayer."
              : err.response.data.message;
        } else {
          errorMessage =
            "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
        }
        setError(errorMessage);
      });
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
}
