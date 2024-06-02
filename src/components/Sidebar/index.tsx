import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-landscape.png";
import dashboardIcon from "../../assets/icons/Category.svg";
import userIcon from "../../assets/icons/Profile.svg";
import productIcon from "../../assets/icons/Bag.svg";
import challengesIcon from "../../assets/icons/Game.svg";
import dataImpactIcon from "../../assets/icons/Chart.svg";
import logoutIcon from "../../assets/icons/Logout.svg";
import arrowIcon from "../../assets/icons/Arrow-Right.svg";

const Sidebar = () => {
  return (
    <div className="sticky left-0 top-0 bg-[#FAFAFA] w-[240px] min-h-screen flex flex-col justify-between gap-0">
      <Link to={"/"} className="bg-[#FAFAFA] h-[90px] w-[240px] flex justify-center items-center">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex flex-col justify-between py-[16px]" style={{ minHeight: "calc(100vh - 90px)" }}>
        <div className="flex flex-col gap-y-[16px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
                : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
            }
          >
            <div className=" w-[24px] h-[24px]">
              <img src={dashboardIcon} alt="dashboard icon" />
            </div>
            <h5 className="font-semibold">Dashboard</h5>
            <div className=" w-[24px] h-[24px]">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </NavLink>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
                : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
            }
          >
            <div className=" w-[24px] h-[24px]">
              <img src={userIcon} alt="user icon" />
            </div>
            <h5 className="font-semibold">Users</h5>
            <div className=" w-[24px] h-[24px]">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
                : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
            }
          >
            <div className=" w-[24px] h-[24px]">
              <img src={productIcon} alt="product" />
            </div>
            <h5 className="font-semibold">Products</h5>
            <div className=" w-[24px] h-[24px]">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </NavLink>
          <NavLink
            to={"/challenges"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
                : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
            }
          >
            <div className=" w-[24px] h-[24px]">
              <img src={challengesIcon} alt="challenges" />
            </div>
            <h5 className="font-semibold">Challenges</h5>
            <div className=" w-[24px] h-[24px]">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </NavLink>
          <NavLink
            to={"/data-impact"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
                : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
            }
          >
            <div className=" w-[24px] h-[24px]">
              <img src={dataImpactIcon} alt="data impact" />
            </div>
            <h5 className="font-semibold">Data Impact</h5>
            <div className=" w-[24px] h-[24px]">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#498579] text-[#FAFAFA] rounded-md flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
                : "bg-[#FAFAFA] rounded-md  hover:bg-[#498579] hover:text-white flex justify-between gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]"
            }
          >
            <div className=" w-[24px] h-[24px]">
              <img src={logoutIcon} alt="logout" />
            </div>
            <h5 className="font-semibold">Log Out</h5>
            <div className=" w-[24px] h-[24px]">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
