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
  const isActive = location.pathname === link ||
    (link === "/dashboard" && location.pathname === "/dashboard") ||
    (link === "/dashboard/data-impact" && (
      location.pathname.includes("/dashboard/data-impact")
    )) ||
    (link === "/dashboard/challenges" && (
      location.pathname.includes("/dashboard/challenges")
    )) ||
    (link === "/dashboard/products" && (
      location.pathname.includes("/dashboard/products")
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
};

const ButtonSignOut = () => {
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
  );
};

export default function Sidebar() {
  return (
    <div className="bg-primary-50 w-[240px] border-r border-neutral-200">
      <div className="sticky top-0  min-h-screen">
        <Link to={"/"} className="bg-primary-50 h-[90px] w-[240px] flex justify-center items-center">
          <img src={logo} alt="logo" />
        </Link>

        <div className=" py-[16px]">
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

        </div>
        <div className="absolute bottom-5">
          <ButtonSignOut />
        </div>
      </div>
    </div>
  );
}
