/* eslint-disable @typescript-eslint/no-explicit-any */
import SwiperEffectCoverflow from "@/components/SwiperEffectCoverflow";
import { useState } from "react";
import robiul from "../../assets/images/profil.jpg";

interface MenuItemProps {
  label: string;
}

const menuItems: MenuItemProps[] = [{ label: "UI/UX" }, { label: "Flutter" }, { label: "Golang" }, { label: "Quality Engineer" }, { label: "Data Engineer" }, { label: "React" }];

interface ItemSwiperProps {
  image: string;
  role: string;
  name: string;
  link: string;
}

const itemCorouselUIUX: ItemSwiperProps[] = [
  { image: robiul, role: "UI/UX", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "UI/UX", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "UI/UX", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "UI/UX", name: "Robiul Awal", link: "/" },
];

const itemCorouselFlutter: ItemSwiperProps[] = [
  { image: robiul, role: "Flutter", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Flutter", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Flutter", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Flutter", name: "Robiul Awal", link: "/" },
];

const itemCorouselGolang: ItemSwiperProps[] = [
  { image: robiul, role: "Golang", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Golang", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Golang", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Golang", name: "Robiul Awal", link: "/" },
];

const itemCorouselQA: ItemSwiperProps[] = [
  { image: robiul, role: "Quality Engineer", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Quality Engineer", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Quality Engineer", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Quality Engineer", name: "Robiul Awal", link: "/" },
];

const itemCorouselDA: ItemSwiperProps[] = [
  { image: robiul, role: "Data Engineer", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Data Engineer", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Data Engineer", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "Data Engineer", name: "Robiul Awal", link: "/" },
];

const itemCorouselReact: ItemSwiperProps[] = [
  { image: robiul, role: "React", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "React", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "React", name: "Robiul Awal", link: "/" },
  { image: robiul, role: "React", name: "Robiul Awal", link: "/" },
];

interface TabItemProps {
  tab: string;
  item: any;
}

const tabItem: TabItemProps[] = [
  { tab: "tab0", item: itemCorouselUIUX },
  { tab: "tab1", item: itemCorouselFlutter },
  { tab: "tab2", item: itemCorouselGolang },
  { tab: "tab3", item: itemCorouselQA },
  { tab: "tab4", item: itemCorouselDA },
  { tab: "tab5", item: itemCorouselReact },
];

const MeetOurBrainSection = () => {
  const [activeTabAppointment, setActiveTabAppointment] = useState("tab0");

  const handleTabAppointmentClick = (tab: string) => {
    setActiveTabAppointment(tab);
  };

  const tabAppointmentClass = (tab: string) => (activeTabAppointment === tab ? "text-neutral-50 bg-primary-500 rounded-[50px] py-[12px] px-[32px]" : "text-primary-600");

  return (
    <section className="bg-[#FFFFFF] w-full h-auto py-[60px] px-[64px] flex flex-col justify-center items-center gap-[48px]">
      <div>
        <h3 className="text-neutral-900 text-[60px] font-semibold">Meet Our Brains</h3>
      </div>
      <div>
        <div className="flex gap-[28px] bg-neutral-50 rounded-[56px] p-[10px] shadow-lg ">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${tabAppointmentClass(`tab${index}`)} flex justify-center items-center hover:text-neutral-50 hover:bg-primary-500 rounded-[50px] cursor-pointer py-[12px] px-[32px]`}
              onClick={() => handleTabAppointmentClick(`tab${index}`)}
            >
              <p className="text-center font-semibold text-[14px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {tabItem.map((item, index) => activeTabAppointment === `${item.tab}` && <SwiperEffectCoverflow key={index} item={item.item} />)}
    </section>
  );
};

export default MeetOurBrainSection;
