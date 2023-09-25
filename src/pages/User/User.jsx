import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import "./user.scss";
import BankAccount from "../../components/BankAccount/BankAccount";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";

export default function User() {
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <main className="main dark-bg">
        <UserInfo />
        <h2 className="sr-only">Accounts</h2>
        <BankAccount />
      </main>
      <Footer />
    </>
  );
}

// Faire composant (collapse) BankData
