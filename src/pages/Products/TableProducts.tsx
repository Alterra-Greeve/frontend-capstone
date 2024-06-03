import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import more from '@/assets/icons/More.svg'
import avatar from './Dummy/avatar.svg'
import helps from './Dummy/helps.svg'

export default function TableProducts({data}) {
    console.log(data)
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
                    <TableRow className="bg-neutral-50">
                        <TableCell className="p-[12px]">#STRW-01-BLK</TableCell>
                        <TableCell className="p-[12px]">
                            <img src={avatar} alt="" className="w-[24px] h-[24px]"/>
                        </TableCell>
                        <TableCell className="p-[12px]">Sedotan Besi</TableCell>
                        <TableCell className="p-[12px]">Rp20.000,-</TableCell>
                        <TableCell className="p-[12px]">200</TableCell>
                        <TableCell className="p-[12px]">100</TableCell>
                        <TableCell className="p-[12px]">Sedotan besi adalah..</TableCell>
                        <TableCell className="py-[12px]">
                            <div className="flex gap-[4px]">
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                            </div>
                        </TableCell>
                        <TableCell className="p-[12px]">09/05/24</TableCell>
                        <TableCell className="p-[12px]">
                            <div className="flex gap-[12px]">
                                <span>12/05/24</span>
                                <img src={more} alt="" className="w-[24px] h-[24px]"/>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-neutral-200">
                        <TableCell className="p-[12px]">#STRW-01-BLK</TableCell>
                        <TableCell className="p-[12px]">
                            <img src={avatar} alt="" className="w-[24px] h-[24px]"/>
                        </TableCell>
                        <TableCell className="p-[12px]">Sedotan Besi</TableCell>
                        <TableCell className="p-[12px]">Rp20.000,-</TableCell>
                        <TableCell className="p-[12px]">200</TableCell>
                        <TableCell className="p-[12px]">100</TableCell>
                        <TableCell className="p-[12px]">Sedotan besi adalah..</TableCell>
                        <TableCell className="py-[12px]">
                            <div className="flex gap-[4px]">
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                                <img src={helps} alt="" className="w-[24px] h-[24px]"/>
                            </div>
                        </TableCell>
                        <TableCell className="p-[12px]">09/05/24</TableCell>
                        <TableCell className="p-[12px]">
                            <div className="flex gap-[12px]">
                                <span>12/05/24</span>
                                <img src={more} alt="" className="w-[24px] h-[24px]"/>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
};
