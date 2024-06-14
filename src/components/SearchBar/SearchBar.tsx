import Search from '@/assets/icons/Search.svg'
import SearchFocus from '@/assets/icons/SearchFocus.svg'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

type SearchProps = {
  value?: any
  onChange: (e: any) => void
}

export default function SearchBar({onChange, value}:SearchProps) {
  // const navigate = useNavigate()
  const [placeHolder, setPlaceHolder] = useState("Cari data produk")
  const [result, setResult] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  function handleInput(e: any) {
    const { value } = e.target
    setResult(value)
    setIsFocus(true)
    onChange(e)
    if (!result) {
      handleBlur()
    }
  }
  function handleFocus() {
    setIsFocus(true)
    setPlaceHolder("")
  }
  function handleBlur() {
    setIsFocus(false)
    setPlaceHolder("Cari data produk")
  }
  console.log(result)
  return (
    <div className={`w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px]
            ${isFocus ? 'border-neutral-800' : 'border-neutral-400'} bg-transparent flex gap-[8px] items-center p-[8px]`}>
      <div className='w-[24px] h-[24px]'>
        {isFocus? <SearchFocus/> : <Search />}
      </div>
      <input type="text" placeholder={placeHolder} className="w-[280px] h-[24px]
                bg-transparent outline-none" onFocus={handleFocus} onBlur={handleInput}
        onChange={handleInput} value={value} />
    </div>
  )
}