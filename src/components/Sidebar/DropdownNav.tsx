import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowIcon, DataImpactIcon } from "@/assets/icons";

interface DropdownLabelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  isHover: boolean;
  isOpen: boolean;
}

const DropdownLabel = ({ isActive, isOpen, isHover, ...rest }: DropdownLabelProps) => (
  <button
    className={` 
      flex justify-between items-center
      ${isActive || isOpen
        ? "bg-[#498579] text-[#FAFAFA] rounded-md w-full p-[16px]"
        : "bg-transparent rounded-md  hover:bg-[#498579] hover:text-white p-[16px]"
      }
    `}
    {...rest}
  >
    <div className="flex items-center gap-[10px]">
      <DataImpactIcon color={isHover || isOpen || isActive ? "#FAFAFA" : ""} />
      <h5 className="font-semibold">Data Impact</h5>
    </div>
    <div className={`transition-all duration-300 ${isOpen || isOpen ? "rotate-90" : ""}`}>
      <ArrowIcon color={isHover || isOpen || isActive ? "#FAFAFA" : ""} />
    </div>
  </button>
)

export default function DropdownNav({ isActive }: { isActive: boolean }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const onToggle = () => setIsOpen(!isOpen);
  const onHover = () => setIsHover(true);
  const onLeave = () => setIsHover(false);

  const activeNav = "border-l-2 border-primary-500 text-neutral-900 bg-primary-200"

  return (
    <div className={`flex flex-col ${isOpen ? "bg-primary-100" : ""} transition-all duration-300 w-[200px] h-fit mx-auto rounded-lg`}>
      <DropdownLabel
        isActive={isActive}
        isOpen={isOpen}
        isHover={isHover}
        onClick={onToggle}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      />

      <div className={`flex flex-col pt-2 transition-none duration-300 ${isOpen ? "visible" : "invisible"}`}>
        <Link
          to="/dashboard/data-impact/challenge"
          className={`p-5 ${location.pathname === "/dashboard/data-impact/challenge" ? activeNav : "text-primary-600 hover:text-primary-900 transition-all"}`}
        >
          <h5 className="font-semibold">Tantangan</h5>
        </Link>
        <Link
          to="/dashboard/data-impact/order"
          className={`p-5 rounded-b-lg ${location.pathname === "/dashboard/data-impact/order" ? activeNav : "text-primary-600 hover:text-primary-900 transition-all"}`}
        >
          <h5 className="font-semibold">Order</h5>
        </Link>
      </div>
    </div >
  )
}