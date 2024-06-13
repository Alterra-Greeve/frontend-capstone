import { useState } from "react"
import DangerIcon from '@/assets/icons/DangerSquare.svg'

type InputProps = {
    type: string;
    style: string;
    id: string;
    name: string;
    isEmpty?: boolean;
    value: any;
    placeholder?: any;
    onChange: (e: string | number) => void;
};

export default function Input({type, style, id, name, isEmpty, value, placeholder, onChange}:InputProps) {
    const [result, setResult] = useState("")
    const [isFocus, setIsFocus] = useState(false)
    function handleInput(e:any) {
        const {value} = e.target
        setResult(value)
        setIsFocus(true)
        onChange(e)
        if(!result){
            handleBlur()
        }
    }
    function handleBlur() {
        setIsFocus(false)
    }
    return (
        <div className="relative">
            <input type={type} className={isEmpty && !value || isEmpty && !value.length? 
            `rounded-[7px] p-[8px] border-[0.5px] border-solid border-danger-500 outline-none ${style}`
            :
            `rounded-[7px] p-[8px] border-[0.5px] border-solid ${isFocus? 'border-neutral-800' : 'border-neutral-400'} outline-none ${style}`} 
            onFocus={() => setIsFocus(true)} onBlur={handleInput} onChange={handleInput} id={id} name={name}
            placeholder={placeholder} value={value}/>
            {isEmpty && !value || isEmpty && !value.length?
                <span className="absolute right-[6px] top-[6px] w-[24px] h-[24px]">
                    <DangerIcon/>
                </span>
            :<></>}
        </div>
    )
};