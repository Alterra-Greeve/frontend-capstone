import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import CatEarth from '@/assets/icons/catEarth.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatBrain from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'
import { useState } from "react";

export default function TableProductsMeasurement({ data, dataShow, filterValue, isFiltered }: any) {
    const tableHeadStyle = "text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] min-w-[90px]"
    console.log(filterValue)
    console.log(isFiltered)
    console.log(data)
    return (
        <div className="mx-[24px] rounded-[8px] bg-primary-100 ">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>No</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Username</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Product Name</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Total Product</TableHead>
                        <TableHead className={tableHeadStyle}>Helps</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Order Date</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Total Point</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item: any, i: any) => {
                        // if (i > dataShow.Start && i < dataShow.end) {
                            return (
                                <TableRow className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-neutral-200'} key={i}>
                                    <TableCell className="p-[12px]">{i}</TableCell>
                                    <TableCell className="p-[12px]">{item.username}</TableCell>
                                    <TableCell className="p-[12px]">{item.product_name}</TableCell>
                                    <TableCell className="p-[12px]">{item.total}</TableCell>
                                    <TableCell className="py-[12px]">
                                        <div className="flex gap-[4px]">
                                        <div className="flex gap-[4px]">
                                        {item.helps?.map((cat: any) => 
                                            <>
                                                { cat.impact_category.name === 'Mengurangi Pemanasan Global' ? <CatEarth /> : null }
                                                { cat.impact_category.name === 'Hemat Uang' ? <CatMoney /> : null }
                                                { cat.impact_category.name === 'Perluas Wawasan' ? <CatBrain /> : null }
                                                { cat.impact_category.name === 'Mengurangi Limbah' ? <CatRecycle /> : null }
                                            </>
                                        )}
                                    </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="p-[12px]">{item.createdAt}</TableCell>
                                    <TableCell className="p-[12px]">{item.impact_point}</TableCell>
                                </TableRow>
                            )
                        // }
                    }
                    )}
                </TableBody>
            </Table>
        </div>
    )
};

