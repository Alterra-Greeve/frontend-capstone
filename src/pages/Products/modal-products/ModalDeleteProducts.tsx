import Button from "@/components/Button/Button";
import ModalAlerts from "./ModalAlerts";
import YesOrNo from '@/assets/icons/YesOrNo.svg'
import { useNavigate } from "react-router-dom";
import NewUseFetch from "@/lib/hooks/newUseFetch";

export default function ModalDeleteProducts({product_id}:any) {
    const navigate = useNavigate()
    const { fetchData } = NewUseFetch<{ data: any }>();
    function handleDelete(){
        if (product_id !== null) {
            fetchData(`admin/products/${product_id}`, {
                method: "delete",
            });
            navigate('')
        }
    }
    return (
        <ModalAlerts className="rounded-[20px] bg-neutral-50 max-w-[500px] 
        max-h-[440px] p-[32px] flex flex-col items-center gap-[32px]">
            <YesOrNo/>
            <div className="flex flex-col gap-[12px] items-center">
                <h1 className="font-[700] text-[24px] text-neutral-900">Yakin ingin menghapus data ini?</h1>
                <h2 className="font-[400] text-[16px] text-neutral-900">Penghapusan bersifat permanen dan tidak bisa dibatalkan</h2>
            </div>
            <div className="flex gap-[24px]">
                <Button variant="secondary" children='Tidak' className='w-[206px] py-[12px]' 
                onClick={() => navigate('')}/>
                <Button variant="primary" children='Iya, Hapus' className='w-[206px] py-[12px]'
                onClick={() => handleDelete()}/>
            </div>
        </ModalAlerts>
    )
};
