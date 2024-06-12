/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import hero1 from "../../assets/images/hero5.png";
import hero2 from "../../assets/images/hero4.png";
import hero3 from "../../assets/images/hero6.png";
import ornamen from "../../assets/images/ornamen2.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex justify-between py-[60px] px-[64px] relative">
      <img
        className="absolute bottom-0 right-0 -z-50"
        src={ornamen}
        alt="ornamen"
      />
      <div className="w-[613px] flex px-[24px] flex-col justify-start gap-[45px] mt-[50px]">
        <h3 className="text-[64px] text-primary-500 font-normal gap-0 leading-tight">
          Together, We Can Create a{" "}
          <span className="font-bold">Greener Future</span>
        </h3>
        <p className="text-neutral-600 text-[25px] font-normal">
          Bergabunglah dengan gerakan ramah lingkungan, berbelanja secara
          bertanggung jawab, dan dapatkan imbalan atas pilihan Anda yang ramah
          lingkungan.
        </p>
        <Button
          onClick={() => scrollToSection("Download")}
          className="bg-primary-500 hover:bg-primary-600 p-[20px] w-[272px] h-auto rounded-[40px] text-neutral-100 text-[24px] font-semibold"
        >
          Mulai Sekarang
        </Button>
      </div>
      <div className="relative max-w-[50%]">
        <img className="w-auto h-auto absolute" src={hero1} alt="hero" />
        <img
          className="w-auto h-auto absolute right-[300px]"
          src={hero2}
          alt="hero"
        />
        <img
          className="w-auto h-auto absolute  right-[100px]"
          src={hero3}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default HeroSection;
