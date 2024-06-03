import AboutUsSectionPrimary from "./AboutUsSectionPrimary";
import GetInTouchSection from "./GetInTouchSection";
import MeetOurBrainSection from "./MeetOurBrainsSection";
import OurMissionSection from "./OurMissionSection";
import PartnersSection from "./PartnersSection";

const AboutUs = () => {
  return (
    <div className="container">
      <AboutUsSectionPrimary />
      <OurMissionSection />
      <MeetOurBrainSection />
      <PartnersSection />
      <GetInTouchSection />
    </div>
  );
};

export default AboutUs;
