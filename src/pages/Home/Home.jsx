import FeatureHome from "../../components/FeatureHome/FeatureHome";
import HeroHome from "../../components/HeroHome/HeroHome";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroHome />
      <FeatureHome />
      <Footer />
    </div>
  );
}
