import { useState } from "react";

type TextAreaProps = {
    width: string;
    height?: string;
    id: string;
    name: string;
};
export default function Textarea({width, height, id, name}: TextAreaProps) {
    const [result, setResult] = useState("")
    const [isFocus, setIsFocus] = useState(false)
    function handleInput(e:any) {
        const {value} = e.target
        setResult(value)
        setIsFocus(true)
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
        <textarea id={id} name={name} className={`w-[${width}] h-[${height}] rounded-[7px] p-[8px]
        resize-none
        border-[0.5px] border-solid ${isFocus? 'border-neutral-800' : 'border-neutral-400'} 
        outline-none`} onFocus={handleFocus} onBlur={handleInput} onChange={handleInput}></textarea>
    )
};
