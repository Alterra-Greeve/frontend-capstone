import newUseFetch from "@/lib/hooks/newUseFetch";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Coin from '@/assets/icons/Coin.svg'
import Button from '@/components/Button/Button'

type dataProducts = {
    name: string;
    description: string;
    coin: number;
    price: number;
    category: any;
    images: any;
}

export default function ModalProductsDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const product_id = searchParams.get("product_id");
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState<dataProducts>();
    const { data, loading, fetchData } = newUseFetch<{ data: any }>();

    useEffect(() => {
        if (product_id !== null) {
            fetchData(`products/${product_id}`, {
                method: "get",
            });
        }
        loading? console.log('helo') : setProductDetail(data?.data);
    }, [product_id]);
    console.log(productDetail)
    return (
        <div 
        className="fixed top-0 bottom-0 left-0 right-0
        flex justify-center items-center" 
        style={{backgroundColor:'rgba(23, 23, 23, 0.50)'}}
        >
            {loading? 'Loading...'
            :
            <div className="p-[16px] rounded-[7px] bg-neutral-50 shadow-custom 
            max-w-[549px] max-h-[698px]">
                <img className='w-[549px] h-[284px] rounded-[7px] bg-cover'/>
                <div className="flex justify-between mt-[8px]">
                    <ul className="flex gap-[8px]">
                        <img className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                        <img className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                        <img className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                        <img className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                        <img className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                    </ul>
                    <div className="py-[17px] px-[27.5px] flex gap-[10px] items-center
                    justify-center bg-warning-50 rounded-[8px]">
                        <Coin />
                        <span className='text-warning-500 text-[24px] font-[700]'>+{productDetail?.coin}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-[24px] mt-[24px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex justify-between items-center text-neutral-900'>
                            <h1 className='font-[800] text-[28px]'>{productDetail?.name}</h1>
                            <span className='text-[18px] font-[700]'>Rp{productDetail?.price},-</span>
                        </div>
                        <span className='font-[500] text-[18px]'>200 Stok</span>
                    </div>
                    <p className='font-[400] text-[18px] text-neutral-500 max-w-[549px]'>
                        {productDetail?.description}
                    </p>
                    <div className='flex gap-[26px] items-center'>
                        <span className='text-neutral-900 font-[500] text-[20px]'>{productDetail?.category[0].impact_category.name}</span>
                        <div className='flex gap-[8px]'>
                            <></>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Button variant='primary' children='Tutup' className='py-[12px] px-[39.5px]'/>
                    </div>
                </div>
            </div>
            }
        </div>
    )
};
