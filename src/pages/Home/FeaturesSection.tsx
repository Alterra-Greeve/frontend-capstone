import mockup1 from "../../assets/images/Mockup 1.png";
import mockup2 from "../../assets/images/Mockup 3.png";
import mockup3 from "../../assets/images/Mockup 2.png";
import mockup4 from "../../assets/images/Mockup 1.2.png";

const FeaturesSection = () => {
  return (
    <section
      id="Features"
      className="px-[64px] pt-[32px] pb-[64px] flex flex-col items-center gap-[56px]"
    >
      <h3 className="text-neutral-900 text-[32px] md:text-[60px] font-semibold max-w-[1095px] text-center">
        Feel the best experience with our features
      </h3>
      <div className="flex flex-col xl:flex-row justify-between gap-[42px]">
        <div className="relative w-[300px] lg:w-[635px] h-[775px] lg:h-[1075px] rounded-[30px] bg-primary-50">
          <h5 className="text-neutral-900 text-[40px] font-medium mt-[70px] ml-[40px] mr-[18px]">
            Greeve Shop
          </h5>
          <p className="text-neutral-700 text-[20px] md:text-[25px] font-normal opacity-50 mt-[26px] ml-[40px] mr-[32px]">
            Temukan berbagai macam produk dari berbagai kategori yang ramah
            lingkungan dan berkelanjutan.
          </p>
          <img
            className="absolute w-[235px] md:w-auto h-auto bottom-0 left-10"
            src={mockup1}
            alt="mockup 1"
          />
          <img
            className="absolute w-[235px] md:w-auto h-auto bottom-0 right-10"
            src={mockup2}
            alt="mockup 2"
          />
        </div>
        <div className="relative w-[300px] lg:w-[635px] h-[775px] lg:h-[1075px] rounded-[30px] bg-primary-50">
          <h5 className="text-neutral-900 text-[40px] font-medium mt-[70px] ml-[40px] mr-[18px]">
            Greeve Challenge
          </h5>
          <p className="text-neutral-700 text-[20px] md:text-[25px] font-normal opacity-50 mt-[26px] ml-[40px] mr-[32px]">
            Bersama Greeve Challenge, kita wujudkan masa depan yang lebih hijau!
          </p>
          <img
            className="absolute w-[235px] md:w-auto h-auto bottom-0 left-10"
            src={mockup3}
            alt="mockup 3"
          />
          <img
            className="absolute w-[235px] md:w-auto h-auto bottom-0 right-10"
            src={mockup4}
            alt="mockup 4"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
