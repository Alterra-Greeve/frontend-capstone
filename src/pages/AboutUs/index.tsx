import AboutUsSectionPrimary from "./AboutUsSectionPrimary";
import GetInTouchSection from "./GetInTouchSection";
import MeetOurBrainSection from "./MeetOurBrainsSection";
import OurMissionSection from "./OurMissionSection";
import WhatIsGreeveSection from "./WhatIsGreeveSection";
import aboutHero from "../../assets/images/aboutHero.png";

const AboutUs = () => {
  return (
    <div>
      <AboutUsSectionPrimary />
      <WhatIsGreeveSection />
      <OurMissionSection />
      <MeetOurBrainSection />
      <GetInTouchSection />
      <img
        className="absolute h-auto w-full top-0 right-0 left-0 -z-50"
        src={aboutHero}
        alt="about hero"
      />
    </div>
  );
};

export default AboutUs;
