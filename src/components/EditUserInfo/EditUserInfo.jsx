import {useState} from "react";
import "./edituserinfo.scss";
import {useSelector, useDispatch} from "react-redux";
import {updateUsername} from "../../redux/actions/userActions";

export default function EditUserInfo({onCancel}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.userData);
  const [userName, setUserName] = useState(user && user.userName); // New local state for userName

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUsername(user.id, userName));
    onCancel();
  };

  return (
    <section className="user-info-content">
      <form>
        <h1>Edit user info</h1>

        <div className="input-wrapper-info">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>

        <div className="input-wrapper-info">
          <label htmlFor="firstname">First name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder={user && user.firstName}
            disabled="disabled"
          />
        </div>

        <div className="input-wrapper-info">
          <label htmlFor="lastname">Last name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder={user && user.lastName}
            disabled="disabled"
          />
        </div>
        <div className="button-wrapper-info">
          <button onClick={handleSave}>Save</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onCancel();
            }}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
