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
    console.log(data.data[0].category)
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
                                            <img src={item.image_url[0]} className="w-[24px] h-[24px] rounded-[24px]"></img>
                                        </TableCell>
                                        <TableCell className="p-[12px]">{item.name}</TableCell>
                                        <TableCell className="p-[12px]">{item.price}</TableCell>
                                        <TableCell className="p-[12px]">{item.stock}</TableCell>
                                        <TableCell className="p-[12px]">{item.coin}</TableCell>
                                        <TableCell className="p-[12px]">{item.description}</TableCell>
                                        <TableCell className="py-[12px]">
                                            <div className="flex gap-[4px]">
                                                {item.category.includes('b5d07366-3b31-4011-95e3-34735b0b61f8') ? <CatEarth/> : null}
                                                {item.category.includes('83808762-e2b8-4b34-a1eb-0ed8d4fda3dd') ? <CatMoney/> : null}
                                                {item.category.includes('e8e714bd-c34e-4278-980c-39bd1f55b5fb') ? <CatBrain/> : null}
                                                {item.category.includes('7d34a5fa-e2cf-466d-9f01-d731f6967082') ? <CatRecycle/> : null}
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
