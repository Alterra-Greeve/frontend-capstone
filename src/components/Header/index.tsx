const Header = () => {
  return (
    <div className="sticky top-0 bg-[#B1B1B1] h-[90px] flex justify-between items-center w-full pl-[16px] pr-[22px]">
      <h1 className="font-bold">DASHBOARD</h1>
      <div className="flex items-center gap-[24px]">
        <div className="bg-[#515151] w-[48px] h-[48px]"></div>
        <div className="bg-[#ffff] w-[53px] h-[53px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
