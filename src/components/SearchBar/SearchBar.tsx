import Search from '@/assets/icons/Search.svg'
import SearchFocus from '@/assets/icons/SearchFocus.svg'
import { useState } from 'react'

export default function SearchBar() {
    const [searchIcon, setSearchIcon] = useState(Search)
    const [placeHolder, setPlaceHolder] = useState("Cari data produk")
    const [result, setResult] = useState("")
    const [isFocus, setIsFocus] = useState(false)
    function handleInput(e:any) {
        const {value} = e.target
        setResult(value)
        setSearchIcon(SearchFocus)
        setIsFocus(true)
        if(!result){
            handleBlur()
        }
    }
    function handleFocus() {
        setSearchIcon(SearchFocus)
        setIsFocus(true)
        setPlaceHolder("")
    }
    function handleBlur() {
        setSearchIcon(Search)
        setIsFocus(false)
        setPlaceHolder("Cari data produk")
    }
    console.log(result)
    return (
        <div className={`w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px]
            ${isFocus? 'border-neutral-800' : 'border-neutral-400'} bg-transparent flex gap-[8px] items-center p-[8px]`}>
            <img src={searchIcon} alt="search" className='w-[24px] h-[24px]' />
            <input type="text" placeholder={placeHolder} className="w-[280px] h-[24px]
                bg-transparent outline-none" onFocus={handleFocus} onBlur={handleInput} 
                onChange={handleInput} value={result}/>
        </div>
    )
}