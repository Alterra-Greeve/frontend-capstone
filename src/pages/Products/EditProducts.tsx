import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GreeveApi } from "@/lib/axios";
import Button from "@/components/Button/Button";
import AdminLayout from "@/layouts/AdminLayout";
import ArrowLeft from "@/assets/icons/Arrow - Left.svg";
import CatEarth from "@/assets/icons/catEarth.svg";
import CatMoney from "@/assets/icons/catMoney.svg";
import CatBrain from "@/assets/icons/catBrains.svg";
import CatRecycle from "@/assets/icons/catRecycle.svg";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import AddImage from "./AddImage";
import ModalAlerts from "./modal-products/ModalAlerts";
import ProductSaved from '@/assets/icons/ProductSaved.svg'
import YesOrNo from '@/assets/icons/YesOrNo.svg'

export default function EditProducts() {
    const {id} = useParams()
    const navigate = useNavigate()
    // const [checked, setChecked] = useState({
    //     earth: false,
    //     money: false,
    //     brain: false,
    //     recycle: false
    // })
    const [isVisible, setIsVisible] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const [newData, setNewData] = useState<any>();
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = `${date < 10 ? `0${date}` : date}/${month < 10 ? `0${month}` : month}/${year}`
    function handleInput(e: any) {
        const { value, name } = e.target;
        setNewData({ ...newData, [name]: value });
    }
    // function handleCheck(e: any) {
    //     const { checked, value } = e.target;
    //     checked ? setNewData({ ...newData, category: [...newData.category, value] })
    //         : setNewData({ ...newData, category: newData.category.filter((item: any) => item !== value) })
    // }
    function handleValidation(){
        const {name, price, stock, image_url, description, coin, category} = newData
        if(name === '' || price === 0 || stock === 0 || image_url.length === 0
        || description === '' || coin === 0 || category.length === 0){
            setIsEmpty(true)
        }else{
            setIsEmpty(false)
            setIsVisible(true)
        }
    }
    // const { postData } = useFetch("products", { method: "post" });
    function handleEdit(){
        // const postDataCopy = { ...newData };
        // postDataCopy.price = parseInt(newData.price);
        // postDataCopy.stock = parseInt(newData.stock);
        // postDataCopy.coin = parseInt(newData.coin);
        // postData(postDataCopy);
        setIsVisible(false)
        setIsSaved(true)
        // console.log(postDataCopy)
    }
    async function getById(){
        try{
            const response = await GreeveApi.get(`products/${id}`)
            setNewData(response.data.data)
            console.log(response.data.data)
        }catch(err){
            console.log(err)
        }finally{
            // newData?.category.forEach((item: any) => {
            //     if(item.impact_category.name === 'Mengurangi Pemanasan Global'){
            //         setChecked({...checked, earth: true})
            //     }if(item.impact_category.name === 'Hemat Uang'){
            //         setChecked({...checked, money: true})
            //     }if(item.impact_category.name === 'Perluas Wawasan'){
            //         setChecked({...checked, brain: true})
            //     }if(item.impact_category.name === 'Mengurangi Limbah'){
            //         setChecked({...checked, recycle: true})
            //     }
            // })
        }
    }   
    useEffect(() => {
        if(id !== undefined){
            getById()
        }
    }, [id]);
    
    console.log(newData?.category)
    console.log(newData?.category[0].impact_category.name)
    return(
        <AdminLayout>
            {/* {loading? 'loading..' : */}
                <div className="flex flex-col gap-[16px] bg-neutral-100 p-[24px] h-[calc(100vh-90px)]">
                    <div className="flex justify-between">
                        <button
                            className="p-[8px] flex gap-[4px] items-center text-neutral-900 
                        text-[14px] font-[500]" onClick={() => navigate("/dashboard/products")}>
                            <div className="w-[24px] h-[24px]">{<ArrowLeft />}</div>
                            Informasi Produk 
                        </button>
                        <div className="flex gap-[8px]">
                            <Button variant="secondary" className='p-[8px]'>Hapus Data</Button>
                            <Button variant="primary" className='p-[8px]' onClick={() => handleValidation()}>
                                Simpan Data
                            </Button>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <span className="text-[12px] font-[600] text-neutral-400">
                            Create Data
                        </span>
                        <span className="rounded-[7px] bg-neutral-300 p-[8px] w-[328px]">
                            <span className="text-[12px] font-[500] text-neutral-500">
                                {currentDate}
                            </span>
                        </span>
                    </div>
                    <form className="flex gap-[10px]">
                        <div
                            className="bg-neutral-50 p-[4px] border-[0.5px] border-solid border-[#17171712] 
                        rounded-[8px] h-[418px] w-[539px]"
                        >
                            <div className="flex flex-col gap-[5px]">
                                <AddImage imageSize="big" setNewData={setNewData} newData={newData} photo={newData?.image_url[0]} />
                                <div className="flex gap-[4px]">
                                    {newData?.image_url[0] ? <AddImage imageSize="small" setNewData={setNewData} newData={newData} photo={newData?.image_url[1]}/>
                                        : <div className="rounded-[8px] h-[103px] w-[103px] bg-neutral-200"></div>}
                                    {newData?.image_url[1] ? <AddImage imageSize="small" setNewData={setNewData} newData={newData} photo={newData?.image_url[2]}/>
                                        : <div className="rounded-[8px] h-[103px] w-[103px] bg-neutral-200"></div>}
                                    {newData?.image_url[2] ? <AddImage imageSize="small" setNewData={setNewData} newData={newData} photo={newData?.image_url[3]}/>
                                        : <div className="rounded-[8px] h-[103px] w-[103px] bg-neutral-200"></div>}
                                    {newData?.image_url[3] ? <AddImage imageSize="small" setNewData={setNewData} newData={newData} photo={newData?.image_url[4]}/>
                                        : <div className="rounded-[8px] h-[103px] w-[103px] bg-neutral-200"></div>}
                                    {newData?.image_url[4] ? <AddImage imageSize="small" setNewData={setNewData} newData={newData} photo={newData?.image_url[5]}/>
                                        : <div className="rounded-[8px] h-[103px] w-[103px] bg-neutral-200"></div>}
                                </div>
                            </div>
                            {!newData?.image_url.length && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Pilih beberapa gambar</span> : null}
                        </div>
                        <div
                            className="text-[12px] font-[600] text-neutral-800 flex flex-col gap-[8px]"
                        >
                            <div className="flex flex-col">
                                <label htmlFor="name">Nama Produk</label>
                                <Input
                                    type="text"
                                    style="w-full"
                                    id="name"
                                    name="name"
                                    isEmpty={isEmpty}
                                    value={newData?.name}
                                    onChange={(e) => handleInput(e)}
                                />
                                {!newData?.name && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Masukkan nama produk</span> : null}
                            </div>
                            <div className="flex gap-[10px]">
                                <div className="flex flex-col">
                                    <label htmlFor="price">Harga</label>
                                    <Input
                                        type="number"
                                        style="w-[189px]"
                                        id="price"
                                        name="price"
                                        isEmpty={isEmpty}
                                        value={newData?.price}
                                        onChange={(e) => handleInput(e)}
                                    />
                                    {!newData?.price && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Masukkan jumlah harga</span> : null}
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="stock">Stok</label>
                                    <Input
                                        type="number"
                                        style="w-[189px]"
                                        id="stock"
                                        name="stock"
                                        isEmpty={isEmpty}
                                        value={newData?.stock}
                                        onChange={(e) => handleInput(e)}
                                    />
                                    {!newData?.stock && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Masukkan jumlah stok</span> : null}
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="coin">Koin</label>
                                    <Input
                                        type="number"
                                        style="w-[189px]"
                                        id="coin"
                                        name="coin"
                                        isEmpty={isEmpty}
                                        value={newData?.coin}
                                        onChange={(e) => handleInput(e)}
                                    />
                                    {!newData?.coin && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Masukkan jumlah koin</span> : null}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="description">Deskripsi</label>
                                <Textarea
                                    style="w-[587px] h-[121px]"
                                    id="description"
                                    name="description"
                                    isEmpty={isEmpty}
                                    value={newData?.description}
                                    onChange={(e) => handleInput(e)}
                                />
                                {!newData?.description && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Masukkan isi deskripsi</span> : null}
                            </div>
                            <div>
                                <label htmlFor="">Membantu</label>
                                <ul className="flex flex-col">
                                    <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                        {/* <input type="checkbox" name="Pemanasan Global" id="" value="b5d07366-3b31-4011-95e3-34735b0b61f8" 
                                        onChange={(e) => handleCheck(e)} checked={checked.earth}/> */}
                                        <div className="p-[4px] flex gap-[4px] items-center">
                                            <CatEarth />
                                            <span className="text-neutral-900 text-[16px] font-[500]">
                                                Pengurangan Pemanasan Global
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                        {/* <input type="checkbox" name="Hemat Uang" id="" value="83808762-e2b8-4b34-a1eb-0ed8d4fda3dd" onChange={(e) => handleCheck(e)} 
                                        checked={checked.money}/> */}
                                        <div className="p-[4px] flex gap-[4px] items-center">
                                            <CatMoney />
                                            <span className="text-neutral-900 text-[16px] font-[500]">
                                                Hemat Uang
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                        {/* <input type="checkbox" name="Memperluas Wawasan" id="" value="e8e714bd-c34e-4278-980c-39bd1f55b5fb" onChange={(e) => handleCheck(e)} 
                                        checked={checked.brain}/> */}
                                        <div className="p-[4px] flex gap-[4px] items-center">
                                            <CatBrain />
                                            <span className="text-neutral-900 text-[16px] font-[500]">
                                                Memperluas Wawasan
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                        {/* <input type="checkbox" name="Mengurangi Limbah" id="" value="7d34a5fa-e2cf-466d-9f01-d731f6967082" onChange={(e) => handleCheck(e)} 
                                        checked={checked.recycle}/> */}
                                        <div className="p-[4px] flex gap-[4px] items-center">
                                            <CatRecycle />
                                            <span className="text-neutral-900 text-[16px] font-[500]">
                                                Mengurangi Limbah
                                            </span>
                                        </div>
                                        {/* <Checkbox className="border-[2px] w-[16px] h-[16px] m-[4px] bg-neutral-50 border-primary-500
                                        data-[state=checked]:bg-neutral-50 data-[state=checked]:text-primary-500" 
                                        onChange={handleCheck}/> */}
                                    </li>
                                {/* {!newData.category.length && isEmpty? <span className="text-danger-500 text-[10px] font-[400]">Pilih beberapa category</span> : null} */}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            {/* } */}
            {isVisible?
                <ModalAlerts className="rounded-[20px] bg-neutral-50 max-w-[500px] 
                max-h-[440px] p-[32px] flex flex-col items-center gap-[32px]">
                    <YesOrNo />
                    <div className="flex flex-col gap-[12px] items-center">
                        <h1 className="font-[700] text-[24px] text-neutral-900">Ingin menyimpan data ini?</h1>
                        <h2 className="font-[400] text-[16px] text-neutral-900">Perubahan dari data sebelumnya akan tersimpan</h2>
                    </div>
                    <div className="flex gap-[24px]">
                        <Button variant="secondary" children='Tidak' className='w-[206px] py-[12px]'
                            onClick={() => setIsVisible(false)} />
                        <Button variant="primary" children='Iya, Simpan' className='w-[206px] py-[12px]'
                            onClick={() => handleEdit()} />
                    </div>
                </ModalAlerts>
            : null}
            {isSaved?
                <ModalAlerts className="rounded-[20px] bg-neutral-50 max-w-[500px] 
                max-h-[440px] p-[32px] flex flex-col items-center gap-[32px]">
                    <ProductSaved/>
                    <div className="flex flex-col gap-[12px] items-center">
                        <h1 className="font-[700] text-[24px] text-neutral-900">Data berhasil tersimpan!</h1>
                        <h2 className="font-[400] text-[16px] text-neutral-900">Data tersimpan! Semua perubahan telah berhasil disimpan.</h2>
                    </div>
                    <div className="flex gap-[24px]">
                        <Link to='/dashboard/products/'>
                            <Button variant="primary" children='Tutup' className='w-[336px] py-[12px]'
                            onClick={() => setIsSaved(false)}/>
                        </Link>
                    </div>
                </ModalAlerts>
            :null
            }
        </AdminLayout>
    )
};
