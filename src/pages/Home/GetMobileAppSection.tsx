import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import apple from "../../assets/images/Apple.png";
import playstore from "../../assets/images/Playstore.png";
import getApp from "../../assets/images/appShowcase.png";
import helps1 from "../../assets/images/image 1.png";
import helps2 from "../../assets/images/image 2.png";
import helps3 from "../../assets/images/image 3.png";
import helps4 from "../../assets/images/image 5.png";
import user from "../../assets/images/Ellipse2.png";
import koin from "../../assets/images/Coin.png";
import eyes from "../../assets/icons/Show.svg";
import rank from "../../assets/images/leaderboard.png";
import Helps from "@/components/HelpsBatch";

const GetMobileAppSection = () => {
  return (
    <section
      id="Download"
      className="relative bg-primary-50 pt-[48px] pb-[882px] h-[1177px] flex flex-col justify-center items-center gap-[35px]"
    >
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-neutral-900 text-[60px] font-semibold text-center">
          Get The Greeve Mobile App
        </h3>
        <p className="text-neutral-600 text-[25px] font-normal text-center max-w-[588px]">
          Mari wujudkan masa depan yang lebih hijau dan berkelanjutan!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-[12px]">
        <Link to={"/"}>
          <Button className="w-[309px] h-[100px] bg-[#000] hover:bg-primary-600 p-[20px] rounded-[10px] ">
            <img
              className="w-[62px] h-[74px] mr-[15px]"
              src={apple}
              alt="apple"
            />
            <div className="flex flex-col gap-1 justify-center items-start">
              <p className="text-neutral-100 text-[20px] font-medium">
                Download on the
              </p>
              <h5 className="text-neutral-100 text-[40px] font-medium">
                App Store
              </h5>
            </div>
          </Button>
        </Link>
        <Link to={"/"}>
          <Button className="w-[309px] h-[100px] bg-[#000] hover:bg-primary-600 p-[20px] rounded-[10px] ">
            <img
              className="w-[57px] h-[64px] mr-[15px]"
              src={playstore}
              alt="playstore"
            />
            <div className="flex flex-col gap-1 justify-center items-start">
              <p className="text-neutral-100 text-[20px] font-normal">
                GET IT ON
              </p>
              <h5 className="text-neutral-100 text-[40px] font-medium">
                Google Play
              </h5>
            </div>
          </Button>
        </Link>
      </div>
      <div className="absolute z-50 bottom-[250px] w-[250px] h-auto left-64 bg-[#FFF] rounded-[10px] shadow-md p-[15px] flex flex-col gap-[10px]">
        <div className="flex gap-[6px] items-center">
          <img className="w-[24px] h-[24px]" src={user} alt="user" />
          <h5 className="text-neutral-900 text-[20px] font-normal">
            Lee John Doe
          </h5>
        </div>
        <h5 className="text-neutral-900 text-[20px] font-normal">
          Greeve Koinmu!
        </h5>
        <div className="flex gap-[6px] justify-between">
          <div className="flex gap-[6px] justify-center items-center">
            <img className="w-[36 px] h-[36px]" src={koin} alt="koin" />
            <h3 className="text-neutral-900 text-[32px] font-bold">10.000</h3>
          </div>
          <img src={eyes} alt="eyes" />
        </div>
        <div className="flex gap-[6px] justify-between items-center">
          <div>
            <p className="text-neutral-900 text-[10px] font-normal">
              ID Pengguna
            </p>
            <p className="text-neutral-900 text-[14px] font-normal">XXX10024</p>
          </div>
          <div>
            <img src={rank} alt="leaderboard" />
            <p className="text-neutral-900 text-[14px] font-normal">1St</p>
          </div>
        </div>
      </div>
      <img className="absolute bottom-0" src={getApp} alt="get mobile app" />
      <Helps
        image={helps1}
        name="Less Global Warming"
        className="absolute bottom-[500px] right-[230px]"
      />
      <Helps
        image={helps2}
        name="Save Money"
        className="absolute bottom-[750px] right-40"
      />
      <Helps
        image={helps3}
        name="Expand Your Main"
        className="absolute bottom-[630px] right-[350px]"
      />
      <Helps
        image={helps4}
        name="Less Waste"
        className="absolute bottom-[350px] right-40"
      />
    </section>
  );
};

export default GetMobileAppSection;
