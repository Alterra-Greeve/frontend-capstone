/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import hero1 from "../../assets/images/hero5.png";
import hero2 from "../../assets/images/hero4.png";
import hero3 from "../../assets/images/hero6.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-col xl:flex-row justify-between 2xl:justify-center py-[60px] md:px-[64px] relative">
      <div className="max-w-[547px] flex px-[24px] flex-col justify-start gap-[45px] mt-[50px]">
        <h3 className="text-[32px] md:text-[64px] text-primary-500 font-normal gap-0 leading-none">
          Together, We <br /> Can Create a <br />
          <span className="font-bold">Greener Future</span>
        </h3>
        <p className="text-neutral-800 text-[20px] font-normal text-justify">
          Bergabunglah dengan gerakan ramah lingkungan, berbelanja{" "}
          <span className="font-semibold">secara bertanggung jawab</span>, dan{" "}
          <span className="font-semibold">dapatkan imbalan</span> atas pilihan
          Anda yang ramah lingkungan.
        </p>
        <Button
          onClick={() => scrollToSection("Download")}
          className="bg-primary-500 hover:bg-primary-600 p-[20px] w-[172px] md:w-[272px] h-auto rounded-[40px] text-neutral-100 text-[16px] md:text-[24px] font-semibold"
        >
          Mulai Sekarang
        </Button>
      </div>
      <div className="flex gap-[-1rem] max-w-1/2-screen justify-center items-center mt-20">
        <img
          className="w-auto max-h-[177px] md:max-h-[277px] lg:max-h-[377px] xl:max-h-[477px]"
          src={hero1}
          alt="hero"
        />
        <img
          className="w-auto max-h-[177px] md:max-h-[277px] lg:max-h-[377px] xl:max-h-[477px]"
          src={hero2}
          alt="hero"
        />
        <img
          className="w-auto max-h-[177px] md:max-h-[277px] lg:max-h-[377px] xl:max-h-[477px]"
          src={hero3}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default HeroSection;
