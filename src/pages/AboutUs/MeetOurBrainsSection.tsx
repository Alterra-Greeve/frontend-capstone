import { useState } from "react";

interface MenuItemProps {
  label: string;
}

const menuItems: MenuItemProps[] = [{ label: "UI/UX" }, { label: "Flutter" }, { label: "Golang" }, { label: "Quality Engineer" }, { label: "Data Engineer" }, { label: "React" }];

const MeetOurBrainSection = () => {
  const [activeTabAppointment, setActiveTabAppointment] = useState("tab0");

  const handleTabAppointmentClick = (tab: string) => {
    setActiveTabAppointment(tab);
  };

  const tabAppointmentClass = (tab: string) => (activeTabAppointment === tab ? "text-neutral-50 bg-primary-500 rounded-[50px] py-[12px] px-[32px]" : "text-primary-600");

  return (
    <section className="bg-[#FFFFFF] w-full h-[920px] py-[60px] px-[64px] flex flex-col justify-center items-center gap-[48px]">
      <div>
        <h3 className="text-neutral-900 text-[60px] font-semibold">Meet Our Brains</h3>
      </div>
      <div></div>
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
    </section>
  );
};

export default MeetOurBrainSection;
