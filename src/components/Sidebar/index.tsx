import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/images/logo-landscape.png";
import { ChallengesIcon, DashboardIconCustom, DataImpactIcon, ProductIcon, UserIcon } from "@/assets/icons";
import { ButtonSignOut, NavItem } from "./items";
import DropdownNav from "./DropdownNav";

export interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  label: string;
}

const navItems: NavItemProps[] = [
  {
    link: "/dashboard",
    icon: <DashboardIconCustom />,
    iconActive: <DashboardIconCustom color="#FAFAFA" />,
    label: "Dashboard",
  },
  {
    link: "/dashboard/users",
    icon: <UserIcon />,
    iconActive: <UserIcon color="#FAFAFA" />,
    label: "Users",
  },
  {
    link: "/dashboard/products",
    icon: <ProductIcon />,
    iconActive: <ProductIcon color="#FAFAFA" />,
    label: "Products",
  },
  {
    link: "/dashboard/challenges",
    icon: <ChallengesIcon />,
    iconActive: <ChallengesIcon color="#FAFAFA" />,
    label: "Challenges",
  },
  {
    link: "/dashboard/forum-discussion",
    icon: <UserIcon />,
    iconActive: <UserIcon color="#FAFAFA" />,
    label: "Forum",
  },
  {
    link: "/dashboard/data-impact",
    icon: <DataImpactIcon />,
    iconActive: <DataImpactIcon color="#FAFAFA" />,
    label: "Data Impact",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-primary-50 w-[240px] border-r border-neutral-200">
      <div className="sticky top-0  min-h-screen">
        <Link
          to={"/"}
          className="bg-primary-50 h-[90px] w-[240px] flex justify-center items-center"
        >
          <img src={logo} alt="logo" />
        </Link>

        <div className=" py-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            {navItems.slice(0, -1).map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
            <DropdownNav isActive={location.pathname.includes("/dashboard/data-impact")} />
          </div>
        </div>
        <div className="absolute bottom-5">
          <ButtonSignOut />
        </div>
      </div>
    </div>
  )
}