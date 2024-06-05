import editIcon from '@/assets/icons/editProduct.svg'
import detailsIcon from '@/assets/icons/detailsProduct.svg'
import deleteIcon from '@/assets/icons/deleteProduct.svg'
type manageProps = {
    isOpen: boolean
    id: string
}
export default function ManageProducts({isOpen, id} : manageProps) {
    function handleEdit(e:any){
        console.log(e.target.id)
    }
    
    return(
        <div className={isOpen? "absolute top-[12px] right-[40px] rounded-[8px] bg-neutral-50 w-[106px] flex flex-col z-10 shadow-custom" : "hidden"}>
            <div className="flex gap-[8px] py-[8px] px-[16px] hover:bg-primary-200 hover:rounded-t-[8px] cursor-pointer" id={id} 
            onClick={handleEdit}>
                <img src={editIcon} alt="" id={id} />
                <span className='text-[14px] font-[700] text-neutral-900' id={id} >Edit</span>
            </div>
            <div className="flex gap-[8px] py-[8px] px-[16px] hover:bg-primary-200 cursor-pointer" id={id} 
            onClick={handleEdit}>
                <img src={detailsIcon} alt="" id={id} />
                <span className='text-[14px] font-[700] text-neutral-900' id={id} >Lihat</span>
            </div>
            <div className="flex gap-[8px] py-[8px] px-[16px] hover:bg-primary-200 hover:rounded-b-[8px] cursor-pointer" id={id} 
            onClick={handleEdit}>
                <img src={deleteIcon} alt="" id={id} />
                <span className='text-[14px] font-[700] text-neutral-900' id={id} >Hapus</span>
            </div>
        </div>
    )
};
