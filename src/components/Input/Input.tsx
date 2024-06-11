import { useState } from "react"

type InputProps = {
    type: string;
    style: string;
    id: string;
    name: string;
    isEmpty?: boolean;
    data?: any;
    placeholder?: any;
    onChange: (e: string | number) => void;
};

export default function Input({type, style, id, name, isEmpty, data, placeholder, onChange}:InputProps) {
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
        <input type={type} className={isEmpty && !data || isEmpty && !data.length? 
        `rounded-[7px] p-[8px] border-[0.5px] border-solid border-danger-500 outline-none ${style}`
        :
        `rounded-[7px] p-[8px] border-[0.5px] border-solid ${isFocus? 'border-neutral-800' : 'border-neutral-400'} outline-none ${style}`} 
        onFocus={() => setIsFocus(true)} onBlur={handleInput} onChange={handleInput} id={id} name={name}
        placeholder={placeholder}/>
    )
};