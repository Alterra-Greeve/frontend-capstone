import CloseSquare from '@/assets/icons/CloseSquare.svg'
// import CatMoney from '@/assets/icons/catMoney.svg'
// import CatEarth from '@/assets/icons/catEarth.svg'
// import CatBrain from '@/assets/icons/catBrains.svg'
// import CatRecycle from '@/assets/icons/catRecycle.svg'
// import { useState } from 'react'

type FilterProps ={
    type: any;
    children: any;
    filter: any;
}

export default function Filter({type, children, filter}:FilterProps) {
    
    return (
        <div className="flex gap-[4px] bg-neutral-50 rounded-[8px] items-center">
            <div className="py-[5px] px-[10px] text-neutral-900 text-[16px] font-[400]
                rounded-[8px] bg-secondary-500">{filter}</div>
            <div className="flex gap-[4px] items-center py-[3px] px-[4px]">
                {type === 'checkbox' && children}
                {type === 'input' &&
                    <span className="text-neutral-500 font-[400] text-[12px]">
                        {children}
                    </span> 
                }
                <CloseSquare />
            </div>
        </div>
    )
};
