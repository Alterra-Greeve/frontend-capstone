import Search from '@/assets/icons/Search.svg'
import SearchFocus from '@/assets/icons/SearchFocus.svg'
import { useState } from 'react'

export default function SearchBar({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  const [placeHolder, setPlaceHolder] = useState("Cari data produk")
  const [isFocus, setIsFocus] = useState<boolean>(false)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setIsFocus(true)
    if (!value) onBlur()
  }
  const onFocus = () => {
    setPlaceHolder("")
    setIsFocus(true);
  }
  const onBlur = () => {
    setPlaceHolder("Cari data produk")
    setIsFocus(false);
  }

  return (
    <div
      className={`w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px] ${isFocus ? 'border-neutral-800' : 'border-neutral-400'} bg-transparent flex gap-[8px] items-center p-[8px]`}
    >
      <div className='w-[24px] h-[24px]'>
        {isFocus ? <SearchFocus /> : <Search />}
      </div>
      <input
        type="text"
        placeholder={placeHolder}
        className="w-[280px] h-[24px] bg-transparent outline-none"
        onFocus={onFocus}
        onBlur={handleInput}
        onChange={handleInput}
        {...rest}
      />
    </div>
  )
}