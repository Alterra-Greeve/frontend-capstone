import editIcon from '@/assets/icons/editProduct.svg'
import detailsIcon from '@/assets/icons/detailsProduct.svg'
import deleteIcon from '@/assets/icons/deleteProduct.svg'
import { useNavigate } from 'react-router-dom'
type manageProps = {
    isOpen: boolean
    id: string
}
export default function ManageProducts({isOpen, id} : manageProps) {
    const navigate = useNavigate()
    function handleEdit(e:any){
        console.log(e.target.id)
    }
    
    return(
        <div className={isOpen? "absolute top-[12px] right-[40px] rounded-[8px] bg-neutral-50 w-[106px] flex flex-col z-10 shadow-custom" : "hidden"}>
            <div className="flex gap-[8px] py-[8px] px-[16px] hover:bg-primary-200 hover:rounded-t-[8px] cursor-pointer"
            onClick={() => navigate(`edit-products/${id}`)}>
                <img src={editIcon} alt=""/>
                <span className='text-[14px] font-[700] text-neutral-900'>Edit</span>
            </div>
            <div className="flex gap-[8px] py-[8px] px-[16px] hover:bg-primary-200 cursor-pointer" 
            onClick={() => handleEdit(id)}
            >
                <img src={detailsIcon} alt="" />
                <span className='text-[14px] font-[700] text-neutral-900' >Lihat</span>
            </div>
            <div className="flex gap-[8px] py-[8px] px-[16px] hover:bg-primary-200 hover:rounded-b-[8px] cursor-pointer" 
            // onClick={}
            >
                <img src={deleteIcon} alt="" />
                <span className='text-[14px] font-[700] text-neutral-900' >Hapus</span>
            </div>
        </div>
    )
};
