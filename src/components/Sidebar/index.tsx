import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sticky left-0 top-0 bg-[#D9D9D9] w-[240px] min-h-screen flex flex-col justify-between gap-0">
      <div className="bg-[#717171] h-[90px] w-[240px] flex justify-center items-center">
        <h1 className="text-white font-bold">Greeve</h1>
      </div>
      <div className="flex flex-col justify-between pt-[16px]" style={{ minHeight: "calc(100vh - 90px)" }}>
        <div className="flex flex-col gap-y-[16px]">
          <Link to={"/"} className="bg-[#BBBBBB] flex gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]">
            <div className="bg-[#515151] w-[24px] h-[24px]"></div>
            <h5 className="font-bold">Dashboard</h5>
          </Link>
          <Link to={"/users"} className="bg-[#BBBBBB] flex gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]">
            <div className="bg-[#515151] w-[24px] h-[24px]"></div>
            <h5 className="font-bold">Users</h5>
          </Link>
          <Link to={"/products"} className="bg-[#BBBBBB] flex gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]">
            <div className="bg-[#515151] w-[24px] h-[24px]"></div>
            <h5 className="font-bold">Products</h5>
          </Link>
          <Link to={"/challenges"} className="bg-[#BBBBBB] flex gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]">
            <div className="bg-[#515151] w-[24px] h-[24px]"></div>
            <h5 className="font-bold">Challenge</h5>
          </Link>
          <Link to={"/"} className="bg-[#BBBBBB] flex gap-[10px] w-[200px] h-[56px] p-[16px] mx-[20px]">
            <div className="bg-[#515151] w-[24px] h-[24px]"></div>
            <h5 className="font-bold">Data Impact</h5>
          </Link>
        </div>
        <div>
          <Link to={"/"} className="bg-[#BBBBBB] flex gap-[10px] w-[200px] h-[56px] p-[16px] m-[20px]">
            <div className="bg-[#515151] w-[24px] h-[24px]"></div>
            <h5 className="font-bold">Log Out</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
