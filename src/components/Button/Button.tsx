type ButtonProps = {
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className: any;
  onClick?: () => void
};

export default function Button({ variant, icon, children, onClick, className }: ButtonProps) {
  let style: string;
  if (variant === 'primary') {
    style = 'bg-primary-500 text-neutral-100 border-primary-500 hover:bg-primary-600 hover:shadow-custom active:bg-primary-700'
  } else {
    style = 'bg-transparent text-primary-500 border-primary-500 hover:shadow-custom active:bg-primary-50'
  }
  return (
    <button className={`${style}
            flex gap-[4px] justify-center items-center border-solid border-[1px] 
            font-[500] text-[14px] rounded-[8px] ${className}`} onClick={onClick}>
                <div className={icon? "w-[24px] h-[24px]" : "hidden"}>{icon}</div>
                {children}
        </button>
    )
};
