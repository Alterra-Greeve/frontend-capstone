import newUseFetch from "@/lib/hooks/newUseFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import CatEarth from '@/assets/icons/catEarthBig.svg'
import CatMoney from '@/assets/icons/catMoneyBig.svg'
import CatBrain from '@/assets/icons/catBrainsBig.svg'
import CatRecycle from '@/assets/icons/catRecycleBig.svg'
import Coin from '@/assets/icons/Coin.svg'
import Button from '@/components/Button/Button'

type dataProducts = {
    name: string;
    description: string;
    coin: number;
    price: number;
    category: any;
    image_url: any;
}

export default function ModalProductsDetail({ product_id }: any) {
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState<dataProducts>();
    const { data, loading, fetchData } = newUseFetch<{ data: any }>();

    useEffect(() => {
        if (product_id !== null) {
            fetchData(`products/${product_id}`, {
                method: "get",
            });
        }
    }, [product_id]);

    useEffect(() => {
        setProductDetail(data?.data)
    }, [data])

    function handleClose(e: any) {
        if (e.target.id === 'wrapper') {
            navigate('')
        }
    }
    console.log(productDetail)
    return (
        loading ? 'Loading...' :
            <div
                className="fixed top-0 bottom-0 left-0 right-0
                flex justify-center items-center z-10"
                id="wrapper"
                style={{ backgroundColor: 'rgba(23, 23, 23, 0.50)' }}
                onClick={(e) => handleClose(e)}
            >
                <div className="p-[16px] rounded-[7px] bg-neutral-50 shadow-custom ">
                    <img src={productDetail?.image_url[0]} className='w-[549px] h-[284px] rounded-[7px] bg-cover'/>
                    <div className="flex justify-between mt-[8px]">
                        <ul className="flex gap-[8px]">
                            {productDetail?.image_url[1]?
                            <img src={productDetail?.image_url[1]} className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                            :<div className="w-[70px] h-[70px] rounded-[8px] bg-neutral-100" ></div>}
                            {productDetail?.image_url[2]?
                            <img src={productDetail?.image_url[2]} className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                            :<div className="w-[70px] h-[70px] rounded-[8px] bg-neutral-100" ></div>}
                            {productDetail?.image_url[3]?
                            <img src={productDetail?.image_url[3]} className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                            :<div className="w-[70px] h-[70px] rounded-[8px] bg-neutral-100" ></div>}
                            {productDetail?.image_url[4]?
                            <img src={productDetail?.image_url[4]} className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                            :<div className="w-[70px] h-[70px] rounded-[8px] bg-neutral-100" ></div>}
                            {productDetail?.image_url[5]?
                            <img src={productDetail?.image_url[5]} className="w-[70px] h-[70px] rounded-[8px] bg-cover"/>
                            :<div className="w-[70px] h-[70px] rounded-[8px] bg-neutral-100" ></div>}
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
                                <h1 className='font-[800] text-[28px] w-[400px]'>{productDetail?.name}</h1>
                                <span className='text-[18px] font-[700]'>Rp{productDetail?.price},-</span>
                            </div>
                            <span className='font-[500] text-[18px]'>200 Stok</span>
                        </div>
                        <p className='font-[400] text-[18px] text-neutral-500 max-w-[549px]'>
                            {productDetail?.description}
                        </p>
                        <div className='flex gap-[26px] items-center'>
                            <span className='text-neutral-900 font-[500] text-[20px]'>Membantu</span>
                            <div className='flex gap-[8px]'>
                                {productDetail?.category.includes('b5d07366-3b31-4011-95e3-34735b0b61f8') ? <CatEarth/> : null}
                                {productDetail?.category.includes('83808762-e2b8-4b34-a1eb-0ed8d4fda3dd') ? <CatMoney/> : null}
                                {productDetail?.category.includes('e8e714bd-c34e-4278-980c-39bd1f55b5fb') ? <CatBrain/> : null}
                                {productDetail?.category.includes('7d34a5fa-e2cf-466d-9f01-d731f6967082') ? <CatRecycle/> : null}
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <Button variant='primary' children='Tutup' className='py-[12px] px-[39.5px]'
                                onClick={() => navigate('')} />
                        </div>
                    </div>
                </div>
            </div>
    )
};
