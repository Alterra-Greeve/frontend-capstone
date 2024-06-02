import Search from '@/assets/icons/Search.svg'
import Filter from '@/assets/icons/Filter.svg'
export default function SearchProducts() {
    return(
        <div className='flex gap-[4px]'>
            <div className="w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px]
            border-[#A3A3A3] bg-transparent flex gap-[8px] items-center p-[8px]">
                <img src={Search} alt="" className='w-[24px] h-[24px]'/>
                <input type="text" placeholder="Cari data produk" className="w-[280px] h-[24px]
                bg-transparent outline-none"/>
            </div>
            <img src={Filter} alt="" className='w-[40px] h-[40px]'/>
        </div>
    )
};
