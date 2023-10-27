// Connect React components to the Redux store using useDispatch and useSelector.

import "./formsignin.scss";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/actions/sessionActions";
import {Navigate} from "react-router-dom";

export default function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  const error = useSelector((state) => state.session.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, rememberMe));
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
