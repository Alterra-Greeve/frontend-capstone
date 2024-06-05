type ButtonProps = {
    variant: 'primary' | 'secondary';
    icon?: string;
    children: React.ReactNode;
    onClick?: () => void
};

export default function Button({variant, icon, children, onClick} : ButtonProps) {
    let style: any;
    if(variant === 'primary'){
        style = 'bg-primary-500 text-neutral-100 border-primary-500 hover:bg-primary-600 hover:shadow-custom active:bg-primary-700'
    }else{
        style = 'bg-transparent text-primary-500 border-primary-500 hover:shadow-custom active:bg-primary-50'
    }
    return (
        <button className={`${style}
            flex gap-[4px] justify-center items-center border-solid border-[1px] 
            p-[8px] font-[500] text-[14px] rounded-[8px]`} onClick={onClick}>
                <img src={icon} alt="" className={icon? "w-[24px] h-[24px]" : ""}/>
                {children}
        </button>
    )
};
