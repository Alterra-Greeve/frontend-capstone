/* eslint-disable @typescript-eslint/no-explicit-any */
import linkedin from "../../assets/icons/linkedin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Key } from "react";
import { Link } from "react-router-dom";

interface ItemSwiperProps {
  image: string;
  role: string;
  name: string;
  link: string;
}

const ItemSwiper = ({ image, role, name, link }: ItemSwiperProps) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-end items-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="w-full flex justify-center max-md:gap-[10px] md:justify-between items-center bg-[#171717] bg-opacity-60 px-[5px] md:px-[33px] py-[px] md:py-[28px]">
        <div>
          <p className="text-neutral-50 text-[16px] md:text-[28px] font-normal">
            {role}
          </p>
          <p className="text-neutral-50 text-[12px] md:text-[32px] font-bold">
            {name}
          </p>
        </div>
        <Link to={link}>
          <img src={linkedin} alt="linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default function SwiperEffectCoverflow({ item }: any) {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {item.map((item: ItemSwiperProps, index: Key | null | undefined) => (
          <SwiperSlide key={index}>
            <ItemSwiper
              image={item.image}
              role={item.role}
              name={item.name}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
