import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Notif from "@/assets/icons/Notification.svg";
import User from "@/assets/images/ellipse.png";

export default function Header() {
  const [path, pathSet] = useState("Dashboard");
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment);
    if (pathSegments.length === 0) {
      pathSet("dashboard");
    } else if (pathSegments.length === 1) {
      pathSet(pathSegments[0].replace(/-/g, " "));
    } else if (pathSegments.length == 2) {
      pathSet(pathSegments[1].replace(/-/g, " "));
    } else if (pathSegments.length > 2) {
      pathSet(pathSegments[1].replace(/-/g, " ") + " " + pathSegments[2].replace(/-/g, " "));
    }
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-[1] border-b border-neutral-200 bg-primary-50 h-[90px] flex justify-between items-center w-full pl-[16px] pr-[22px]">
      <h1 className="font-bold text-[#1C6758] text-[24px] capitalize">{path}</h1>
      <div className="flex items-center justify-center gap-[24px]">
        <div className="w-[48px] h-[48px] flex justify-center cursor-pointer">
          <Notif />
        </div>
        <div className="w-[53px] h-[53px] flex justify-center cursor-pointer">
          <img src={User} alt="ellipse" />
        </div>
      </div>
    </div>
  )
}