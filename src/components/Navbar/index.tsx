import { Link, NavLink, useLocation } from "react-router-dom";
import logoPrimary from "../../assets/images/greeveLogo.png";
import menuIcon from "../../assets/images/list.png";
import greevePrimary from "../../assets/images/greeveText.png";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
      className={` fixed py-[20px] md:py-[34px] transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-[white]" : "bg-transparent"
      } px-[20px] md:px-[64px] w-full h-80px md:h-[124px] flex flex-row justify-between z-50`}
    >
      <Link className="flex justify-center items-center" to={"/"}>
        <div className="flex justify-center items-center gap-[10px] h-auto w-auto">
          <img className="h-[30px] md:h-auto" src={logoPrimary} alt="logo" />
          <img
            className="h-[10px] md:h-auto w-auto"
            src={greevePrimary}
            alt="greeve"
          />
        </div>
      </Link>
      <div className="flex justify-end items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <img className="w-[30px] h-auto" src={menuIcon} alt="menu icon" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col justify-start items-start gap-[23px]">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  onClick={() => scrollToSection(`${item.label}`)}
                  className={
                    (item.label == "Home" && location.pathname == "/") ||
                    (item.label == "About Us" &&
                      location.pathname == "/about-us")
                      ? `text-primary-500 border-b-2 border-primary-500 w-full block flex-grow md:flex md:items-center md:w-auto`
                      : scrolled
                      ? `text-neutral-900 w-full block flex-grow md:flex md:items-center md:w-auto`
                      : `text-neutral-900 w-full block flex-grow md:flex md:items-center md:w-auto`
                  }
                >
                  <h3 className="text-[16px] font-semibold block mt-4 md:inline-block md:mt-0">
                    {item.label}
                  </h3>
                </NavLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex justify-end items-center gap-[23px]">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={() => scrollToSection(`${item.label}`)}
            className={
              (item.label == "Home" && location.pathname == "/") ||
              (item.label == "About Us" && location.pathname == "/about-us")
                ? `text-primary-500 border-b-2 border-primary-500 w-full block flex-grow md:flex md:items-center md:w-auto`
                : scrolled
                ? `text-neutral-900 w-full block flex-grow md:flex md:items-center md:w-auto`
                : `text-neutral-50 w-full block flex-grow md:flex md:items-center md:w-auto`
            }
          >
            <h3 className="text-[16px] font-semibold block mt-4 md:inline-block md:mt-0">
              {item.label}
            </h3>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
