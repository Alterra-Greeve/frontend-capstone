import partner1 from "../../assets/images/kampusMerdeka.png";
import partner2 from "../../assets/images/msib.png";
import partner3 from "../../assets/images/alterra.png";
import partner4 from "../../assets/images/bear.png";
import partner5 from "../../assets/images/indomie.png";

interface PartnerItemProps {
  image: string;
}

const partnerItem: PartnerItemProps[] = [{ image: partner1 }, { image: partner2 }, { image: partner3 }, { image: partner4 }, { image: partner5 }];

const PartnersSection = () => {
  return (
    <section className="bg-primary-50 py-[68px] flex flex-col gap-[32px]">
      <div className="flex justify-center items-center">
        <h3 className="text-neutral-900 text-[40px] font-bold">Partners</h3>
      </div>
      <div className="flex flex-row justify-center items-center gap-[69px]">
        {partnerItem.map((item, index) => (
          <img key={index} src={item.image} alt="" />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
