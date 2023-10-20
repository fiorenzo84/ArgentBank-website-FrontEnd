import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Error from "../pages/Error/Error";
import User from "../pages/User/User";

export default function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
