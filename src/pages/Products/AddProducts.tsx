import download from "@/assets/icons/Export.svg"
import plus from "@/assets/icons/plus.svg"
export default function AddProducts() {
    return (
        <div className="flex gap-[8px]">
            <button className="flex gap-[4px] justify-center items-center text-[#1C6758] border-solid border-[1px] border-[#1C6758]
            p-[8px] font-[500] text-[14px] rounded-[8px] bg-transparent">
                <img src={download} alt="" className="w-[24px] h-[24px]"/>
                Export
            </button>
            <button className="flex gap-[4px] justify-center items-center text-[#F5F5F5] p-[8px] font-[500] text-[14px] bg-[#1C6758] 
            rounded-[8px]">
                <img src={plus} alt="" className="w-[24px] h-[24px]"/>
                Tambahkan Produk Baru
            </button>
        </div>
    )
};
