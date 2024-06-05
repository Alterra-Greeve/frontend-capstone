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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="py-[34px] bg-transparent px-[64px] w-full h-[124px] flex flex-row justify-between z-50">
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
          <NavLink
            key={index}
            to={item.link}
            onClick={() => scrollToSection(`${item.label}`)}
            className={(item.label == "Home" && location.pathname == "/") || (item.label == "About Us" && location.pathname == "/about-us") ? "text-primary-500 border-b-2 border-primary-500" : "text-neutral-500"}
          >
            <h3 className="text-[16px] font-semibold">{item.label}</h3>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
