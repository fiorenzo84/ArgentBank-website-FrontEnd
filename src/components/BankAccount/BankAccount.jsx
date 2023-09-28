import "./bankaccount.scss";
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import BankDataHeader from '../BankDataHeader/BankDataHeader';
import BankData from "../BankData/BankData";

export default function BankAccount() {
  const [showBankData, setShowBankData] = useState(false);
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        {showBankData ? (
            <button className="close-button" onClick={() => setShowBankData(false)}><AiOutlineClose className="close-button-logo"/></button>
          ) : (
            <button className="transaction-button" onClick={() => setShowBankData(true)}>View transactions</button>
          )}
          {/* <button className="transaction-button">View transactions</button> */}
        </div>
      </section>
        {showBankData && (
          <>
            <BankDataHeader />
            <BankData />
          </>
        )}
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
