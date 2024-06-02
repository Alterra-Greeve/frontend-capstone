import Search from '@/assets/icons/Search.svg'
export default function SearchBar() {
    return (
        <div className="w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px]
            border-neutral-500 bg-transparent flex gap-[8px] items-center p-[8px]">
            <img src={Search} alt="search" className='w-[24px] h-[24px]' />
            <input type="text" placeholder="Cari data produk" className="w-[280px] h-[24px]
                bg-transparent outline-none" />
        </div>
    )
};
