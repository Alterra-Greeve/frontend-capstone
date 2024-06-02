import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/lib/redux";
import { signOut } from "@/lib/redux/api/auth";

import logo from "@/assets/images/logo-landscape.png";
import dashboardIcon from "@/assets/icons/Category.svg";
import userIcon from "@/assets/icons/Profile.svg";
import productIcon from "@/assets/icons/Bag.svg";
import challengesIcon from "@/assets/icons/Game.svg";
import dataImpactIcon from "@/assets/icons/Chart.svg";
import logoutIcon from "@/assets/icons/Logout.svg";
import arrowIcon from "@/assets/icons/Arrow-Right.svg";

interface NavItemProps {
  link: string;
  icon: string;
  label: string;
}

const navItems: NavItemProps[] = [
  { link: "/dashboard", icon: dashboardIcon, label: "Dashboard" },
  { link: "/dashboard/users", icon: userIcon, label: "Users" },
  { link: "/dashboard/products", icon: productIcon, label: "Products" },
  { link: "/dashboard/challenges", icon: challengesIcon, label: "Challenges" },
  { link: "/dashboard/data-impact", icon: dataImpactIcon, label: "Data Impact" },
];

const NavItem = ({ link, icon, label }: NavItemProps) => {
  const location = useLocation();

  const isActive = location.pathname === link ||
    (
      link === "/dashboard" &&
      location.pathname === "/dashboard"
    );

  return (
    <NavLink to={link}
      className={() =>
        isActive
          ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
          : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
      }
    >
      <div className="w-[24px] h-[24px]">
        <img src={icon} alt={`${label} icon`} />
      </div>
      <h5 className="font-semibold">{label}</h5>
      <div className="w-[24px] h-[24px]">
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </NavLink>
  )
}

const ButtonSignOut = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[#FAFAFA] rounded-md hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
    >
      <div className="w-[24px] h-[24px]">
        <img src={logoutIcon} alt="logout" />
      </div>
      <h5 className="font-semibold">Log Out</h5>
      <div className="w-[24px] h-[24px]">
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </button>
  )
}

export default function Sidebar() {
  return (
    <div className="sticky left-0 top-0 bg-[#FAFAFA] w-[240px] min-h-screen flex flex-col justify-between gap-0">
      <Link to={"/"} className="bg-[#FAFAFA] h-[90px] w-[240px] flex justify-center items-center">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex flex-col justify-between py-[16px]" style={{ minHeight: "calc(100vh - 90px)" }}>
        <div className="flex flex-col gap-y-[16px]">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>

        <ButtonSignOut />
      </div>
    </div>
  )
}