/* eslint-disable @typescript-eslint/no-explicit-any */
import SwiperEffectCoverflow from "@/components/SwiperEffectCoverflow";
import { useState } from "react";
import robiul from "../../assets/images/profil.jpg";
import Krisna from "../../assets/images/Rectangle 59.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown";

interface MenuItemProps {
  label: string;
}

const menuItems: MenuItemProps[] = [
  { label: "UI/UX" },
  { label: "Flutter" },
  { label: "Golang" },
  { label: "Quality Engineer" },
  { label: "Data Engineer" },
  { label: "React" },
];

interface ItemSwiperProps {
  image: string;
  role: string;
  name: string;
  link: string;
}

const itemCorouselUIUX: ItemSwiperProps[] = [
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/9b5919a6-3f27-4204-8d91-ee91ef35765cftArya.jpeg",
    role: "UI/UX",
    name: "Arya Adi Guna",
    link: "https://www.linkedin.com/in/arya-adi-guna-a1271216a/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/77a00f96-abce-48ce-ae6c-f4d0f26c056dFoto_Imam.jpg",
    role: "UI/UX",
    name: "Imam Zuhdi Muzakkiy",
    link: "http://www.linkedin.com/in/imamzuhdim",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/1e7360a4-877f-4920-89e4-818436c7c303fotoprofesional.jpg",
    role: "UI/UX",
    name: "Farhan Maulana",
    link: "http://www.linkedin.com/in/farhan-maulana-24622322b",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/f3b467ac-d236-4af1-8f4c-dfce226bc22dFoto%20Jovanka%20Siginendra.jpg",
    role: "UI/UX",
    name: "Jovanka Siginendra",
    link: "https://www.linkedin.com/in/jovanka-siginendra/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/d2084779-3dd3-4e9a-b916-f98b9d99085dIMG_20220212_214033.jpg",
    role: "UI/UX",
    name: "Afrizal Dwi Muharam",
    link: "http://www.linkedin.com/in/afrizal-dwi-muharam",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/862f0072-38b9-4bab-a9ba-439044334e6aselfie-time-1717679054600.jpg.jpg",
    role: "UI/UX",
    name: "Ulya Nur Chamidah",
    link: "https://www.linkedin.com/in/ulya-nur-chamidah-ba30b0221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/479e11d2-721c-4571-84c2-54422ee32670Alif%20Ainul.jpg",
    role: "UI/UX",
    name: "Alif Ainul",
    link: "https://www.linkedin.com/in/alifainul/",
  },
];

const itemCorouselFlutter: ItemSwiperProps[] = [
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/cb75b1aa-f2f7-4dd6-8529-88282870297c1716606970420.jpeg",
    role: "Flutter",
    name: "La Ode Naubill Huda Ashara",
    link: "https://www.linkedin.com/in/la-ode-naubill-huda-ashara-495660260/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/ee52d24a-46ee-42f8-bda9-b9daf7aa21cdLevian%20Dandra.png",
    role: "Flutter",
    name: "Levian Dandra",
    link: "https://www.linkedin.com/in/77leviann//",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/326e96d3-36e1-4440-a09b-d1bb870155d7IMG_20211124_154314.jpg",
    role: "Flutter",
    name: "Muhamad Ivan Fadillah",
    link: "https://www.linkedin.com/in/ivantendou/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/933b0c24-6575-4772-8b75-e3eafa90466b_DSC3385.JPG",
    role: "Flutter",
    name: "M. Arif",
    link: "https://www.linkedin.com/in/m-arif-b74614221/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/013e3d47-8519-4164-9aa3-863aa5f10f15aisyah%20hasna.jpg",
    role: "Flutter",
    name: "Aisyah Gasna Aulia",
    link: "http://www.linkedin.com/in/asyhasnaa",
  },
];

const itemCorouselGolang: ItemSwiperProps[] = [
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/76bed02a-7615-42eb-8b89-c78a3087eaabBlueBackground.png",
    role: "Golang",
    name: "Nur Faid Prasetyo",
    link: "https://www.linkedin.com/in/kzquandary/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/75b648ea-25e4-4578-ba50-98a449bf0878Chandra.jpg",
    role: "Golang",
    name: "Chandra Wahyu Rafialdi",
    link: "https://www.linkedin.com/in/chandra-wahyu-r-8875b3297/",
  },
];

const itemCorouselQA: ItemSwiperProps[] = [
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/40f1eb90-a1be-4cde-8eff-d3ffd5d9fea0IMG_20240223_024516.jpg",
    role: "Quality Engineer",
    name: "Alsa Yanima Choirul Fikri",
    link: "/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/d337a0dd-ca8e-4905-9557-3b3f49161124aku.jpg",
    role: "Quality Engineer",
    name: "Ahmad Syifa Ar Rizqi Hermawan",
    link: "/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/71787ba2-de39-41a2-b013-e037b3803b16IMG_0265.jpg",
    role: "Quality Engineer",
    name: "Bintang Hari Pratama",
    link: "https://www.linkedin.com/in/bintang-hari-pratama-89446994/",
  },
];

const itemCorouselDA: ItemSwiperProps[] = [
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/b2151de3-f241-4b9e-9a75-3ae9785ae9efAdhira%20Riyanti%20Amanda%20Pas%20Foto%202x3.png",
    role: "Data Engineer",
    name: "Adhira Riyanti Amanda",
    link: "https://www.linkedin.com/in/adhira-riyanti-amanda/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/af8f1b67-0086-4418-9fe9-6dbc4a4dbcef1642749840178.jpeg",
    role: "Data Engineer",
    name: "Muhammad Dzikri Rizaldi",
    link: "https://www.linkedin.com/in/dzikririzaldi/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/9fc37a4a-c956-4d93-9b67-bc15e5661c9aprofil.jpeg",
    role: "Data Engineer",
    name: "Zahra Putri Zanuarti",
    link: "/",
  },
];

const itemCorouselReact: ItemSwiperProps[] = [
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/6b41d6f4-a2bd-4bed-b555-3f3896d6e867juvens.jpg",
    role: "React",
    name: "Juvens Laurensius Dwitama",
    link: "/",
  },
  {
    image:
      "https://storage.googleapis.com/alterra-greeve/greeve/76ffd6c1-cccc-48e2-a1f3-132aee9cf7a4IMG_0058.JPG",
    role: "React",
    name: "Yosan Okta Odhianto",
    link: "https://www.linkedin.com/in/yosan-okta-18b23a266/",
  },
  {
    image: robiul,
    role: "React",
    name: "Robiul Awal",
    link: "https://www.linkedin.com/in/robiul-awal11/",
  },
  {
    image: Krisna,
    role: "React",
    name: "Anak Agung Made Krisna Astrawan",
    link: "/",
  },
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

  const tabAppointmentClass = (tab: string) =>
    activeTabAppointment === tab
      ? "text-neutral-50 bg-primary-500 rounded-[50px] py-[12px] px-[32px]"
      : "text-primary-600";

  return (
    <section className="bg-[#FFFFFF] w-full h-auto py-[60px] px-[64px] flex flex-col justify-center items-center gap-[48px]">
      <div>
        <h3 className="text-neutral-900 text-[32px] md:text-[60px] text-center font-semibold">
          Meet Our Brains
        </h3>
      </div>
      <div>
        <div className="hidden lg:flex gap-[28px] bg-neutral-50 rounded-[56px] p-[10px] shadow-lg ">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${tabAppointmentClass(
                `tab${index}`
              )} flex justify-center items-center hover:text-neutral-50 hover:bg-primary-500 rounded-[50px] cursor-pointer py-[12px] px-[32px]`}
              onClick={() => handleTabAppointmentClick(`tab${index}`)}
            >
              <p className="text-center font-semibold text-[14px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden text-neutral-50 bg-primary-500 rounded-[50px] cursor-pointer py-[12px] px-[32px]">
            Role
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuItems.map((item, index) => (
              <DropdownMenuItem
                className={`${tabAppointmentClass(
                  `tab${index}`
                )} hover:text-neutral-50 hover:bg-primary-500 rounded-[50px] cursor-pointer py-[12px] px-[32px]`}
                onClick={() => handleTabAppointmentClick(`tab${index}`)}
                key={index}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {tabItem.map(
        (item, index) =>
          activeTabAppointment === `${item.tab}` && (
            <SwiperEffectCoverflow key={index} item={item.item} />
          )
      )}
    </section>
  );
};

export default MeetOurBrainSection;
