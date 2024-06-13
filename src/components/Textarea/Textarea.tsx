import { useState } from "react";
import DangerIcon from '@/assets/icons/DangerSquare.svg'

type TextAreaProps = {
    style: string;
    id: string;
    name: string;
    isEmpty?: boolean;
    value: any;
    onChange: (e: string) => void;
};
export default function Textarea({style, id, name, isEmpty, value, onChange}: TextAreaProps) {
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
    function handleFocus() {
        setIsFocus(true)
    }
    function handleBlur() {
        setIsFocus(false)
    }
    return (
        <div className="relative">
            <textarea id={id} name={name} className={isEmpty && !value || isEmpty && !value.length?
            `rounded-[7px] p-[8px] resize-none border-[0.5px] border-solid border-danger-500 outline-none ${style}`
            :
            `rounded-[7px] p-[8px] resize-none border-[0.5px] border-solid 
            ${isFocus? 'border-neutral-800' : 'border-neutral-400'} outline-none ${style}`} 
            onFocus={handleFocus} onBlur={handleInput} onChange={handleInput} value={value}></textarea>
            {isEmpty && !value || isEmpty && !value.length?
                <span className="absolute right-[6px] top-[6px] w-[24px] h-[24px]">
                    <DangerIcon/>
                </span>
            :null}
        </div>
    )
};
