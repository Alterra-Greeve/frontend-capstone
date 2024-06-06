import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/lib/redux";
import { signOut } from "@/lib/redux/api/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import logo from "@/assets/images/logo-landscape.png";
import { ArrowIcon, ChallengesIcon, DashboardIconCustom, DataImpactIcon, LogoutIcon, ProductIcon, UserIcon } from "@/assets/icons";
import { useState } from "react";

interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  label: string;
}

const navItems: NavItemProps[] = [
  { link: "/dashboard", icon: <DashboardIconCustom />, iconActive: <DashboardIconCustom color="#FAFAFA" />, label: "Dashboard" },
  { link: "/dashboard/users", icon: <UserIcon />, iconActive: <UserIcon color="#FAFAFA" />, label: "Users" },
  { link: "/dashboard/products", icon: <ProductIcon />, iconActive: <ProductIcon color="#FAFAFA" />, label: "Products" },
  { link: "/dashboard/challenges", icon: <ChallengesIcon />, iconActive: <ChallengesIcon color="#FAFAFA" />, label: "Challenges" },
  { link: "/dashboard/data-impact", icon: <DataImpactIcon />, iconActive: <DataImpactIcon color="#FAFAFA" />, label: "Data Impact" },
];

const NavItem = ({ link, icon, iconActive, label }: NavItemProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isActive =
    location.pathname === link ||
    (link === "/dashboard" && location.pathname === "/dashboard") ||
    (link === "/dashboard/data-impact" && (location.pathname === "/dashboard/data-impact/order" || location.pathname === "/dashboard/data-impact/challenge"));

  return (
    <NavLink
      to={link}
      className={() =>
        isActive
          ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-start items-center gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
          : "bg-transparent rounded-md  hover:bg-[#498579] hover:text-white flex justify-start items-center gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
      }
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible ? <div className="w-[24px] h-[24px]">{iconActive}</div> : <div className="w-[24px] h-[24px]">{isActive ? iconActive : icon}</div>}
      <h5 className="font-semibold">{label}</h5>
      {label === "Data Impact" ? (
        isVisible ? (
          <div className={`w-[24px] h-[24px] ${isActive ? "rotate-90" : "rotate-90"} ml-[10px]`}>
            <ArrowIcon color="#FAFAFA" />
          </div>
        ) : (
          <div className={`w-[24px] h-[24px] ${isActive ? "rotate-90" : "rotate-90"} ml-[10px]`}> {isActive ? <ArrowIcon color="#FAFAFA" /> : <ArrowIcon />}</div>
        )
      ) : (
        ""
      )}
    </NavLink>
  );
};

const ButtonSignOut = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={handleLogout}
      className="bg-primary-50 rounded-md hover:bg-[#498579] hover:text-white flex justify-start gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
    >
      <div className="w-[24px] h-[24px]">{isVisible ? <LogoutIcon color="#FAFAFA" /> : <LogoutIcon />}</div>
      <h5 className="font-semibold">Log Out</h5>
    </button>
  );
};

export default function Sidebar() {
  return (
    <div className="sticky left-0 top-0 bg-primary-50 w-[240px] min-h-screen flex flex-col justify-between gap-0">
      <Link to={"/"} className="bg-primary-50 h-[90px] w-[240px] flex justify-center items-center">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex flex-col justify-between py-[16px]" style={{ minHeight: "calc(100vh - 90px)" }}>
        <div className="flex flex-col gap-y-[16px]">
          {navItems.slice(0, -1).map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <NavItem {...navItems[4]} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-50">
              <DropdownMenuItem>
                <NavItem link="/dashboard/data-impact/order" icon={<DataImpactIcon />} iconActive={<DataImpactIcon color="#FAFAFA" />} label="Order" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NavItem link="/dashboard/data-impact/challenge" icon={<DataImpactIcon />} iconActive={<DataImpactIcon color="#FAFAFA" />} label="Challenge" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ButtonSignOut />
      </div>
    </div>
  );
}
