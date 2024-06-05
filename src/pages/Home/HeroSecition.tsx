/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import hero from "../../assets/images/iPhone 13 Pro Graphite Mockup.png";
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
      <img className="absolute bottom-0 right-0 -z-50" src={ornamen} alt="ornamen" />
      <div className="w-[613px] flex px-[24px] flex-col justify-start gap-[45px] mt-[50px]">
        <h3 className="text-[72px] text-neutral-900 font-bold gap-0 leading-tight">Together, We Can Create a Greener Future</h3>
        <p className="text-neutral-600 text-[25px] font-normal">Bergabunglah dengan gerakan ramah lingkungan, berbelanja secara bertanggung jawab, dan dapatkan imbalan atas pilihan Anda yang ramah lingkungan.</p>
        <Button onClick={() => scrollToSection("Download")} className="bg-primary-500 hover:bg-primary-600 p-[20px] w-[272px] h-auto rounded-[40px] text-neutral-100 text-[24px] font-semibold">
          Mulai Sekarang
        </Button>
      </div>
      <div>
        <img className="w-[683px] h-[auto]" src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
