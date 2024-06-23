import { Button } from "@/components/ui/button";
import womanWithPhone from "../../assets/images/ilustrasiPegangHP.png";
import { Link } from "react-router-dom";
import helps1 from "../../assets/images/image 1.png";
import helps2 from "../../assets/images/image 3.png";
import Helps from "@/components/HelpsBatch";

const AboutUsSection = () => {
  return (
    <section
      id="About Us"
      className="flex flex-col lg:flex-row px-[64px] py-[56px] items-center justify-between 2xl:justify-center 2xl:gap-[250px] gap-[50px] relative"
    >
      <div className="relative">
        <div className="bg-primary-50 w-[315px] h-[500px] lg:w-[515px] lg:h-[700px] rounded-[30px]">
          <img
            className="w-[398px] lg:w-[598px] h-auto absolute bottom-0 left-[10px] lg:left-[70px]"
            src={womanWithPhone}
            alt="woman with phone"
          />
          <Helps
            className="absolute bottom-[500px] -right-2 md:-right-10"
            image={helps1}
            name="Less Global Warming"
          />
          <Helps
            className="absolute bottom-[400px] -right-2 lg:-right-24"
            image={helps2}
            name="Expand Your Mind"
          />
        </div>
      </div>
      <div className="max-w-[664px]  h-auto">
        <h3 className="text-neutral-900 text-[32px] md:text-[60px] font-semibold mb-[17px]">
          About Us
        </h3>
        <p className="text-neutral-600 text-[20px] md:text-[25px] font-normal mb-[50px] text-justify">
          Greeve adalah platform yang membantu anda menjalani gaya hidup ramah
          lingkungan. Melalui aplikasi kami, anda dapat membeli produk
          berkelanjutan, mengukur dampak aktivitas sehari-hari anda terhadap
          lingkungan.
        </p>
        <Link to={"/about-us"}>
          <Button className="bg-primary-500 hover:bg-primary-600 p-[20px] w-[172px] md:w-[272px] h-auto rounded-[40px] text-neutral-100 text-[16px] md:text-[24px] font-semibold">
            Selengkapnya
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
