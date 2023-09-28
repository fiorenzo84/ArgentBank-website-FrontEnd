import "./user.scss";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import BankAccount from "../../components/BankAccount/BankAccount";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";

export default function User() {
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  const [isEditing, setIsEditing] = useState(false); // Nouvel état local pour le basculement

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <main className="user main dark-bg">
        {isEditing ? (
          <EditUserInfo onCancel={() => setIsEditing(false)} />
        ) : (
          <UserInfo onEdit={() => setIsEditing(true)} />
        )}
        <h2 className="sr-only">Accounts</h2>
        <BankAccount />
      </main>
      <Footer />
    </>
  );
}
