import Search from '@/assets/icons/Search.svg'
import SearchFocus from '@/assets/icons/SearchFocus.svg'
import { useState } from 'react'

export default function SearchBar() {
    const [searchIcon, setSearchIcon] = useState(Search)
    const [placeHolder, setPlaceHolder] = useState("Cari data produk")

    function handleFocus() {
        setSearchIcon(SearchFocus)
        setPlaceHolder("")
    }
    function handleBlur() {
        setSearchIcon(Search)
        setPlaceHolder("Cari data produk")
    }

    return (
        <div className="w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px]
            border-neutral-500 bg-transparent flex gap-[8px] items-center p-[8px]">
            <img src={searchIcon} alt="search" className='w-[24px] h-[24px]' />
            <input type="text" placeholder={placeHolder} className="w-[280px] h-[24px]
                bg-transparent outline-none"
                onFocus={handleFocus}
                onBlur={handleBlur} />
        </div>
    )
}