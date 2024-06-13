import ornamen1 from "../../assets/images/hero3.png";
import AboutUsSection from "./AboutUsSection";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import GetMobileAppSection from "./GetMobileAppSection";
import HeroSection from "./HeroSecition";
import PaketSection from "./PaketSection";
import PartnersSection from "./PartnersSection";

const Home = () => {
  return (
    <div className="realtive">
      <HeroSection />
      <PartnersSection />
      <AboutUsSection />
      <FeaturesSection />
      <PaketSection />
      <GetMobileAppSection />
      <FAQSection />
      <img
        src={ornamen1}
        alt="ornamen 1"
        className="absolute h-auto w-full top-0 right-0 left-0 -z-50"
      />
    </div>
  );
};

export default Home;
