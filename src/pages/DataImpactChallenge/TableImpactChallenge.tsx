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

export default function TableImpactChallenge({ data, dataShow, filterValue, isFiltered }: any) {
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
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Tantangan</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Tingkat Kesulitan</TableHead>
                        <TableHead className={tableHeadStyle}>Helps</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>EXP</TableHead>
                        <TableHead className={`${tableHeadStyle} px-[12px]`}>Point Impact</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item: any, i: any) => {
                        // if (i > dataShow.Start && i < dataShow.end) {
                        return (
                            <TableRow className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-neutral-200'} key={i}>
                                <TableCell className="p-[12px]">{i + 1}</TableCell>
                                <TableCell className="p-[12px]">{item.username}</TableCell>
                                <TableCell className="p-[12px]">{item.challenge_name}</TableCell>
                                <TableCell className="p-[12px]">Tingkat Kesulitan</TableCell>
                                <TableCell className="py-[12px]">
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
                                </TableCell>
                                <TableCell className="p-[12px]">EXP</TableCell>
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
