import image1 from "../../assets/images/Rectangle 59.png";
import image2 from "../../assets/images/Rectangle 60.png";
import image3 from "../../assets/images/Rectangle 61.png";

const OurMissionSection = () => {
  return (
    <section className="bg-primary-50 py-[60px] px-[64px] flex flex-row justify-between gap-[60px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex justify-between gap-[32px]">
          <img className="w-[306px] h-[309px]" src={image2} alt="image2" />
          <img className="w-[306px] h-[309px]" src={image3} alt="image3" />
        </div>
        <img className="w-[644px] h-[309px]" src={image1} alt="image1" />
      </div>
      <div className="max-w-[604px] flex flex-col justify-center">
        <h3 className="text-neutral-900 text-[60px] font-semibold">Our Mission</h3>
        <p className="text-neutral-600 text-[25px] font-normal text-justify">
          Misi kami adalah memberdayakan individu untuk membuat pilihan yang berkelanjutan dan berkontribusi pada planet yang lebih sehat. Karena kami percaya bahwa perubahan besar dimulai dari langkah kecil.
        </p>
      </div>
    </section>
  );
};

export default OurMissionSection;
