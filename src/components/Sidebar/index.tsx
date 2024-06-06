import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/lib/redux";
import { signOut } from "@/lib/redux/api/auth";

import logo from "@/assets/images/logo-landscape.png";
import DashboardIcon from "@/assets/icons/Category.svg";
import UserIcon from "@/assets/icons/Profile.svg";
import ProductIcon from "@/assets/icons/Bag.svg";
import ChallengesIcon from "@/assets/icons/Game.svg";
import DataImpactIcon from "@/assets/icons/Chart.svg";
import LogoutIcon from "@/assets/icons/Logout.svg";
import ArrowIcon from "@/assets/icons/Arrow-Right.svg";

interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItemProps[] = [
  { link: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
  { link: "/dashboard/users", icon: <UserIcon />, label: "Users" },
  { link: "/dashboard/products", icon: <ProductIcon />, label: "Products" },
  { link: "/dashboard/challenges", icon: <ChallengesIcon />, label: "Challenges" },
  { link: "/dashboard/data-impact", icon: <DataImpactIcon />, label: "Data Impact" },
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
        {icon}
      </div>
      <h5 className="font-semibold">{label}</h5>
      <div className="w-[24px] h-[24px]">
        <ArrowIcon />
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
        <LogoutIcon />
      </div>
      <h5 className="font-semibold">Log Out</h5>
      <div className="w-[24px] h-[24px]">
        <ArrowIcon />
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