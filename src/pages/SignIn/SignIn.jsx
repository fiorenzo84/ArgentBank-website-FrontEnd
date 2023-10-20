import "./signin.scss";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import FormSignIn from "../../components/FormSignIn/FormSignIn";

export default function SignIn() {
  return (
    <>
      <Header />
      <main className="main dark-bg">
        <FormSignIn />
      </main>
      <Footer />
    </>
  );
}
