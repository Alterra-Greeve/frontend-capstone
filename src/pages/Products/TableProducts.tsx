import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import more from '@/assets/icons/More.svg'
import avatar from '@/assets/icons/avatar.svg'
import catEarth from '@/assets/icons/catEarth.svg'
import catMoney from '@/assets/icons/catMoney.svg'
import catBrain from '@/assets/icons/catBrains.svg'
import catRecycle from '@/assets/icons/catRecycle.svg'

export default function TableProducts({data}:any) {
    console.log(data.data[0])
    return (
        <div className=" ">
            <Table>
                <TableHeader>
                    <TableRow className="bg-primary-100 ">
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Product ID</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Image</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Name</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Price</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Stock</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Coin</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Description</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] min-w-[90px]">Helps</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Create Date</TableHead>
                        <TableHead className="text-neutral-900 text-[12px] font-[400] leading-[24px] py-[8px] px-[12px] min-w-[90px]">Update Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.data[0].map((item:any, i:any) =>
                        <TableRow className={i%2 === 0? 'bg-neutral-50' : 'bg-neutral-200'} key={i}>
                            <TableCell className="p-[12px]">{item.product_id}</TableCell>
                            <TableCell className="p-[12px]">
                                <img src={avatar} alt="" className="w-[24px] h-[24px]"/>
                            </TableCell>
                            <TableCell className="p-[12px]">{item.name}</TableCell>
                            <TableCell className="p-[12px]">{item.price}</TableCell>
                            <TableCell className="p-[12px]">200</TableCell>
                            <TableCell className="p-[12px]">{item.coin}</TableCell>
                            <TableCell className="p-[12px]">{item.description}</TableCell>
                            <TableCell className="py-[12px]">
                                <div className="flex gap-[4px]">
                                    <img src={catEarth} alt="" className="w-[24px] h-[24px]"/>
                                    <img src={catMoney} alt="" className="w-[24px] h-[24px]"/>
                                    <img src={catBrain} alt="" className="w-[24px] h-[24px]"/>
                                    <img src={catRecycle} alt="" className="w-[24px] h-[24px]"/>
                                </div>
                            </TableCell>
                            <TableCell className="p-[12px]">09/05/24</TableCell>
                            <TableCell className="p-[12px]">
                                <div className="flex gap-[12px]">
                                    <span>12/05/24</span>
                                    <img src={more} alt="" className="w-[24px] h-[24px] cursor-pointer"
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
};
