import { Link, NavLink, useLocation } from "react-router-dom";
import logoPrimary from "../../assets/images/greeveLogo.png";
import greevePrimary from "../../assets/images/greeveText.png";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` fixed py-[34px] transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-[white]" : "bg-transparent"
      } px-[64px] w-full h-[124px] flex flex-row justify-between z-50`}
    >
      <Link className="flex justify-center items-center" to={"/"}>
        <div className="flex justify-center items-center gap-[10px] h-auto w-auto">
          <img src={logoPrimary} alt="logo" />
          <img className="h-auto w-auto" src={greevePrimary} alt="greeve" />
        </div>
      </Link>
      <div className="flex justify-end items-center gap-[23px]">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={() => scrollToSection(`${item.label}`)}
            className={
              (item.label == "Home" && location.pathname == "/") ||
              (item.label == "About Us" && location.pathname == "/about-us")
                ? "text-primary-500 border-b-2 border-primary-500"
                : scrolled
                ? "text-neutral-900"
                : "text-neutral-50"
            }
          >
            <h3 className="text-[16px] font-semibold">{item.label}</h3>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
