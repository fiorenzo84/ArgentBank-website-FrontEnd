//connectez ses composants React à notre store Redux en utilisant useDispatch pour dispatcher des actions et useSelector pour accéder à l'état du store.

import "./formsignin.scss";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/actions/sessionActions"; // Ajuste le chemin d'importation en fonction de ton projet
import {Navigate} from "react-router-dom";

export default function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated); // Ajuste en fonction de la structure de ton state
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
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
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* ... */}
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}
