import "./userinfo.scss";
import {useSelector} from "react-redux";

export default function UserInfo({onEdit}) {
  const user = useSelector((state) => state.session.userData);

  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {user && (user.userName || user.firstName)}
        {/* {user && user.lastName} */}
      </h1>
      <button className="edit-button" onClick={onEdit}>
        Edit Name
      </button>
    </header>
  );
}
