import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo Landscape.png";
import logoPrimary from "../../assets/images/greeveLogo.png";
import greevePrimary from "../../assets/images/greeveText.png";

interface NavItemProps {
  link: string;
  label: string;
}

const navItems: NavItemProps[] = [
  { link: "/", label: "Home" },
  { link: "/", label: "About Us" },
  { link: "/", label: "Features" },
  { link: "/", label: "Download" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="py-[34px] bg-transparent px-[64px] sticky top-0 w-full h-[124px] flex flex-row justify-between">
      <Link className="flex justify-center items-center" to={"/"}>
        {location.pathname === "/" ? (
          <img src={logo} alt="logo" />
        ) : (
          <div className="flex justify-center items-center gap-[10px] h-auto w-auto">
            <img src={logoPrimary} alt="logo" />
            <img className="h-auto w-auto" src={greevePrimary} alt="greeve" />
          </div>
        )}
      </Link>
      <div className="flex justify-end items-center gap-[23px]">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.link}>
            <h3 className="text-neutral-500 text-[16px] font-semibold">{item.label}</h3>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
