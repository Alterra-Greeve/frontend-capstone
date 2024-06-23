/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "@/assets/icons/Profile.svg";
import ArrowDown from "@/assets/icons/arrowDown.svg";
import ArrowUp from "@/assets/icons/arrowUp.svg";

const DataStatistic = ({ data }: any) => {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Dapatkan bulan sekarang
  const now = new Date();
  const currentMonthIndex = now.getMonth(); // getMonth() mengembalikan angka antara 0-11

  // Dapatkan nama bulan
  const currentMonthName = monthNames[currentMonthIndex];

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[16px] justify-between">
        <div className="bg-neutral-50 w-[186px] h-[150px] p-[12px] rounded-md">
          <h6 className="font-medium text-[16px] mb-[12px] text-neutral-900">
            Total Produk
          </h6>
          <h3 className="font-bold text-[28px] text-neutral-900">
            {data.total_product}
          </h3>
          <p className="text-[12px] text-neutral-600 font-normal mb-[4px]">
            barang
          </p>
        </div>
        <div className="bg-neutral-50 w-[319px] h-[150px] p-[12px] rounded-md">
          <div className="flex justify-between">
            <h6 className="font-medium text-[16px] mb-[12px] text-neutral-900">
              Produk Terbaru
            </h6>
            <p className="font-medium text-[16px] mb-[12px] text-neutral-600">
              {currentMonthName}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[28px] text-neutral-900">
              {data.total_new_product_this_month}
            </h3>
            <p className="text-[12px] text-neutral-600 font-normal mb-[4px]">
              barang
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[24px] h-[24px]">{<ArrowDown />}</div>
            <p className="font-normal text-[12px]">
              {data.total_new_product_this_month_percentage == ""
                ? "0%"
                : data.total_new_product_this_month_percentage + " "}
              dari bulan lalu
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 w-full h-[150px] p-[12px] rounded-md">
        <h6 className="font-medium text-[16px] mb-[12px] text-neutral-900">
          Pengguna
        </h6>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-[28px] text-neutral-900">
              {data.total_user}
            </h3>
            <p className="text-[12px] text-neutral-600 font-normal mb-[4px]">
              orang
            </p>
          </div>
          <div className="w-[200px] h-[56px] bg-primary-50 border rounded-md border-[#1C6758] flex items-center gap-[12px] px-[8px]">
            <div className=" w-[24px] h-[24px] flex justify-center items-center">
              <User />
            </div>
            <div className="flex flex-col">
              <p className="text-primary-500 font-bold">
                {data.total_membership}
              </p>
              <p className="text-[12px] text-[#1C6758]">Pengguna Membership</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="w-[24px] h-[24px]">
            <ArrowUp />
          </div>
          <p className="font-normal text-[12px]">
            {data.total_user_percentage == ""
              ? "0% "
              : data.total_user_percentage}
            dari bulan lalu
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataStatistic;
