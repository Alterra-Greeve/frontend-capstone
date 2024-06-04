import { useState } from "react"

type InputProps = {
    type: string;
    width: string;
    height?: string;
    id: string;
    name: string;
};

export default function Input({type, width, height, id, name}:InputProps) {
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
        <input type={type} className={`${width} ${height} rounded-[7px] p-[8px] border-[0.5px] 
        border-solid ${isFocus? 'border-neutral-800' : 'border-neutral-400'} outline-none`} 
        onFocus={handleFocus} onBlur={handleInput} onChange={handleInput} id={id} name={name}/>
    )
};