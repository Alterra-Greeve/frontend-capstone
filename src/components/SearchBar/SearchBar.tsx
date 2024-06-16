import Search from '@/assets/icons/Search.svg'
import SearchFocus from '@/assets/icons/SearchFocus.svg'
import { useState } from 'react'

export default function SearchBar({ ...rest }) {
  const [result, setResult] = useState("")
  const [isFocus, setIsFocus] = useState(false)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setResult(value)
    setIsFocus(true)
    if (!result) onBlur()
  }
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  return (
    <div
      className={`w-[328px] h-[40px] rounded-[7px] border-solid border-[0.5px] ${isFocus ? 'border-neutral-800' : 'border-neutral-400'} bg-transparent flex gap-[8px] items-center p-[8px]`}
    >
      <div className='w-[24px] h-[24px]'>
        {isFocus ? <SearchFocus /> : <Search />}
      </div>
      <input
        type="text"
        className="w-[280px] h-[24px] bg-transparent outline-none"
        onFocus={onFocus}
        onBlur={handleInput}
        onChange={handleInput}
        {...rest}
      />
    </div>
  )
}