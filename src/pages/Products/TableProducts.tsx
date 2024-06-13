import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import SeeMore from '@/assets/icons/More.svg'
import CatEarth from '@/assets/icons/catEarth.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatBrain from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'
import ManageProducts from "./ManageProducts";
import { useState } from "react";

export default function TableProducts({data, dataShow}:any) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDropDown, setSelectedDropDown] = useState("");
    const tableHeadStyle = "text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] min-w-[90px]"
    function handleOpen(id: any) {
        setIsOpen(!isOpen);
        setSelectedDropDown(id);
    }
    // console.log(data.data)
    return (
        <div className="mx-[24px] rounded-[8px] bg-primary-100 ">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Product ID</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Image</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Name</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Price</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Stock</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Coin</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Description</TableHead>
                        <TableHead className={tableHeadStyle}>Helps</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Create Date</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Update Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.data.map((item:any, i:any) =>{
                        if(i > dataShow.Start && i < dataShow.end){
                            return (
                                    <TableRow className={i%2 === 0? 'bg-neutral-50' : 'bg-neutral-200'} key={i}>
                                        <TableCell className="p-[12px]">{item.product_id}</TableCell>
                                        <TableCell className="p-[12px]">
                                            <img src={item.images[0].image_url} className="w-[24px] h-[24px] rounded-[24px]"></img>
                                        </TableCell>
                                        <TableCell className="p-[12px]">{item.name}</TableCell>
                                        <TableCell className="p-[12px]">{item.price}</TableCell>
                                        <TableCell className="p-[12px]">{item.stock}</TableCell>
                                        <TableCell className="p-[12px]">{item.coin}</TableCell>
                                        <TableCell className="p-[12px]">{item.description}</TableCell>
                                        <TableCell className="py-[12px]">
                                            <div className="flex gap-[4px]">
                                                {item?.category.map((item:any)=>{
                                                    if(item.impact_category.name === 'Mengurangi Pemanasan Global'){
                                                        return <CatEarth/>
                                                    }else if(item.impact_category.name === 'Hemat Uang'){
                                                        return <CatMoney/>
                                                    }else if(item.impact_category.name === 'Perluas Wawasan'){
                                                        return <CatBrain/>
                                                    }else if(item.impact_category.name === 'Mengurangi Limbah'){
                                                        return <CatRecycle/>
                                                    }else{
                                                        return null
                                                    }
                                                })}
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-[12px]">{item.created_at}</TableCell>
                                        <TableCell className="p-[12px] relative">
                                            <div className="flex gap-[12px] items-center">
                                                <span>12/05/24</span>
                                                <div className="w-[24px] h-[24px] cursor-pointer" onClick={() => handleOpen(item.product_id)}>
                                                    <SeeMore/>
                                                </div>
                                            </div>
                                            {selectedDropDown === item.product_id && (
                                                <ManageProducts isOpen={isOpen} id={item.product_id}/>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                
                            )
                        }}
                    )}
                </TableBody>
            </Table>
        </div>
    )
};
