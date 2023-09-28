import "./bankdata.scss";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";
import BankDataExpanded from "../BankDataExpanded/BankDataExpanded";

export default function BankData() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="bank-data">
        <p>27/02/20</p>
        <p>Golden Sun Bakery</p>
        <p>$8.00</p>
        <p>$298.00</p>
        <FaChevronDown
          className={`bank-data-chevronDown ${isExpanded ? "rotate" : ""}`}
          onClick={toggleExpanded}
        />
      </div>
      <div className={`bank-data-expanded ${isExpanded ? "open" : ""}`}>
        <BankDataExpanded />
      </div>
    </>
  );
}

// RAJOUTER CHEVRONUP QUAND BANDATAEXPANDED EST TRUE
// MODIFIER MARGE DE BANKDATA QUAND CLOSE
