import { useEffect, useState } from "react";
import notif from "../../assets/icons/Notification.svg";
import user from "../../assets/images/ellipse.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [path, pathSet] = useState("Dashboard");
  const location = useLocation();
  const pathName = location.pathname;
  useEffect(() => {
    const firstPathSegment = pathName.split("/")[1].replace(/-/g, " ");
    if (firstPathSegment == "") {
      pathSet("dashboard");
    } else {
      pathSet(firstPathSegment);
    }
  }, [pathName]);
  return (
    <div className="sticky top-0 bg-[#FAFAFA] h-[90px] flex justify-between items-center w-full pl-[16px] pr-[22px]">
      <h1 className="font-bold text-[#1C6758] text-[24px] capitalize">{path}</h1>
      <div className="flex items-center justify-center gap-[24px]">
        <div className="w-[48px] h-[48px] flex justify-center cursor-pointer">
          <img src={notif} alt="notification" />
        </div>
        <div className="w-[53px] h-[53px] flex justify-center cursor-pointer">
          <img src={user} alt="ellipse" />
        </div>
      </div>
    </div>
  );
};

export default Header;
