import "./bankdataexpanded.scss";

export default function BankDataExpanded() {
  return (
    <div className="expanded-data">
      <div className="container-data">
        <span className="category">Transaction type</span>
        <span className="category">Category</span>
        <span className="category">Note</span>
      </div>
      <div className="container-data">
        <span>Electronic</span>
        <span>Food</span>
        <span>Lorem ipsum</span>
      </div>
    </div>
  );
}
