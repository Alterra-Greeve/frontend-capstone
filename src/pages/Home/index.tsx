import ornamen1 from "../../assets/images/ornamen1.png";
import AboutUsSection from "./AboutUsSection";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import GetMobileAppSection from "./GetMobileAppSection";
import HeroSection from "./HeroSecition";
import PaketSection from "./PaketSection";

const Home = () => {
  return (
    <div className="container realtive">
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <PaketSection />
      <GetMobileAppSection />
      <FAQSection />
      <img src={ornamen1} alt="ornamen 1" className="absolute top-0 left-0 -z-50" />
    </div>
  );
};

export default Home;
