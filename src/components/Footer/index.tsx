/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo Landscape.png";
import ig from "../../assets/icons/Vector.svg";
import fb from "../../assets/icons/Vector2.svg";
import linkedin from "../../assets/icons/Vector3.svg";
import gmail from "../../assets/icons/Vector4.svg";

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

interface SocialItemProps {
  link: string;
  image: string;
}

const socialItems: SocialItemProps[] = [
  { link: "/", image: ig },
  { link: "/", image: fb },
  { link: "/", image: linkedin },
  { link: "/", image: gmail },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer className="py-[24px] px-[64px] sticky top-0 bg-primary-500 w-full h-auto flex flex-wrap lg:flex-row justify-between">
      <Link className="flex justify-center items-center mb-5" to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex flex-col md:flex-row justify-end items-start md:items-center gap-[23px]">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={() => scrollToSection(`${item.label}`)}
          >
            <h3 className="text-neutral-50 text-[16px] font-semibold">
              {item.label}
            </h3>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-end items-center gap-[10px] max-sm:mt-5">
        {socialItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="w-[32px] h-[32px] bg-neutral-50 flex justify-center items-center rounded-full"
          >
            <img src={item.image} alt={`{${index}}`} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
