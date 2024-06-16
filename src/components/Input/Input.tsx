import React, { useState } from "react"
import DangerIcon from '@/assets/icons/DangerSquare.svg'

type InputProps = {
  style: string;
  isEmpty?: boolean;
};

export default function Input({ style, isEmpty, ...rest }: InputProps) {
  const [result, setResult] = useState("")
  const [isFocus, setIsFocus] = useState(false)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setResult(value)
    setIsFocus(true)
    if (!result) {
      handleBlur()
    }
  }

  function handleBlur() {
    setIsFocus(false)
  }

  const onBlur = () => setIsFocus(false)
  const onFocus = () => setIsFocus(true)

  return (
    <div className="relative">
      <input className={isEmpty && !value || isEmpty && !value.length ?
        `rounded-[7px] p-[8px] border-[0.5px] border-solid border-danger-500 outline-none ${style}`
        :
        `rounded-[7px] p-[8px] border-[0.5px] border-solid ${isFocus ? 'border-neutral-800' : 'border-neutral-400'} outline-none ${style}`}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleInput}
        {...rest}
      />
      {isEmpty && !value || isEmpty && !value.length ?
        <span className="absolute right-[6px] top-[6px] w-[24px] h-[24px]">
          <DangerIcon />
        </span>
        : <></>}
    </div>
  )
}