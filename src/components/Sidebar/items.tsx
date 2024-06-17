import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowIcon, LogoutIcon } from "@/assets/icons";
import type { NavItemProps } from ".";
import { useAppDispatch } from "@/lib/redux";
import { signOut } from "@/lib/redux/api/auth";

export const NavItem = ({ link, icon, iconActive, label }: NavItemProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isActive = location.pathname === link ||
    (link === "/dashboard" && location.pathname === "/dashboard") ||
    (link === "/dashboard/challenges" && (
      location.pathname.includes("/dashboard/challenges")
    )) ||
    (link === "/dashboard/products" && (
      location.pathname.includes("/dashboard/products")
    )) ||
    (link === "/dashboard/forum-discussion" && (
      location.pathname.includes("/dashboard/forum-discussion")
    ));

  return (
    <NavLink to={link}
      className={() =>
        isActive
          ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-start items-center gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
          : "bg-transparent rounded-md  hover:bg-[#498579] hover:text-white flex justify-start items-center gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
      }
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="w-[24px] h-[24px]">
        {isVisible ? iconActive : (isActive ? iconActive : icon)}
      </div>

      <h5 className="font-semibold">{label}</h5>
      {label === "Data Impact" && (
        <div className={`w-[24px] h-[24px] ${isActive ? "rotate-90" : "rotate-90"} ml-[10px]`}>
          <ArrowIcon color={isActive || isVisible ? "#FAFAFA" : undefined} />
        </div>
      )}
    </NavLink>
  );
}



export const ButtonSignOut = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleLogout = () => dispatch(signOut());

  return (
    <button
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={handleLogout}
      className="bg-primary-50 rounded-md hover:bg-[#498579] hover:text-white flex justify-start gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
    >
      <div className="w-[24px] h-[24px]">
        {isVisible
          ? <LogoutIcon color="#FAFAFA" />
          : <LogoutIcon />
        }
      </div>
      <h5 className="font-semibold">Log Out</h5>
    </button>
  )
}