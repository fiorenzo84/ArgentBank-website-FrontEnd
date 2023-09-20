import "./user.scss";
import BankAccount from "../../components/BankAccount/BankAccount";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";

export default function User() {
  return (
    <>
      <Header />
      <main className="main dark-bg">
        <UserInfo />
        <h2 className="sr-only">Accounts</h2>
        <BankAccount />
        <BankAccount />
        <BankAccount />
      </main>
      <Footer />
    </>
  );
}

// faire un composant Bankaccount
// et dedans faire BankData
