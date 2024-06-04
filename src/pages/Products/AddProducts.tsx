import Button from "@/components/Button/Button";
import AdminLayout from "@/layouts/AdminLayout";
import ArrowLeft from '@/assets/icons/Arrow - Left.svg'
import defaultPict from '@/assets/icons/default-pic.svg'
import subDefault from '@/assets/icons/sub-default-pic.svg'
import upload from '@/assets/icons/Upload.svg'
import catEarth from '@/assets/icons/catEarth.svg'
import catMoney from '@/assets/icons/catMoney.svg'
import catBrain from '@/assets/icons/catBrains.svg'
import catRecycle from '@/assets/icons/catRecycle.svg'
import checkBox from '@/assets/icons/Checkbox.svg'
import { Link } from "react-router-dom";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import useFetch from "@/lib/hooks/useFetch";
import { useState } from "react";


export default function AddProducts() {
    const [newData, setNewData] = useState({})
    function handleInput(e: any){
        const {value,name} = e.target
        setNewData({...newData, [name]: value})
    }
    function handleSubmit(){
        // const { loading, error } = useFetch("products", { method: 'post', body: {newData}});
        // if (loading) return <AdminLayout>Loading...</AdminLayout>;
        // if (error) return <AdminLayout>{error.message}</AdminLayout>;
        console.log(newData)
    }
    return(
        <AdminLayout>
            <div className="flex flex-col gap-[16px] bg-neutral-100 p-[24px] h-[calc(100vh-90px)]">
                <div className="flex justify-between">
                    <Link to={'/dashboard/products'}>
                        <button className="p-[8px] flex gap-[4px] items-center text-neutral-900 
                        text-[14px] font-[500]" >
                            <img src={ArrowLeft} alt="" className="w-[24px] h-[24px]"/>
                            Informasi Produk
                        </button>
                    </Link>
                    <div className="flex gap-[8px]">
                        <Button variant="secondary">Hapus Data</Button>
                        <Button variant="primary" onClick={handleSubmit}>Simpan Data</Button>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col">
                    <span className="text-[12px] font-[600] text-neutral-400">Create Data</span>
                    <span className="rounded-[7px] bg-neutral-300 p-[8px] w-[328px]">
                        <span className="text-[12px] font-[500] text-neutral-500">09/05/24</span>
                    </span>
                </div>
                <div className="flex gap-[10px]">
                    <div className="bg-neutral-50 p-[8px] border-[0.5px] border-solid border-[#17171712] 
                    rounded-[8px]">
                        <div className="flex flex-col gap-[5px]">
                            <img src={defaultPict} alt="" />
                            <div className="flex gap-[4px]">
                                <img src={subDefault} alt="" />
                                <img src={subDefault} alt="" />
                                <img src={subDefault} alt="" />
                                <img src={subDefault} alt="" />
                                <img src={subDefault} alt="" />
                            </div>
                            <div className="bg-primary-100 border-[1px] border-primary-400 border-dashed w-[531px]
                            py-[12px] px-[8px] flex flex-col gap-[4px] items-center justify-center rounded-[8px]">
                                <img src={upload} alt="" />
                                <h1 className="text-[12px] font-[500px] text-neutral-700">Unggah Disini</h1>
                            </div>
                        </div>
                    </div>
                    <form action="" className="text-[12px] font-[600] text-neutral-800 flex flex-col gap-[4px]">
                        <div className="flex gap-[10px]">
                            <div>
                                <label htmlFor="" className="text-neutral-400">Product ID</label>
                                <div className="w-[288px] p-[8px] bg-neutral-300 rounded-[7px] font-[500] text-neutral-500">#STRW-01-BLK</div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="namaProduk">Nama Produk</label>
                                <Input type="text" style="w-[288px]" id="namaProduk" 
                                name="namaProduk" onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="flex gap-[10px]">
                            <div className="flex flex-col">
                                <label htmlFor="harga">Harga</label>
                                <Input type="number" style="w-[189px]" id="harga" 
                                name="harga" onChange={handleInput}/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="stok">Stok</label>
                                <Input type="number" style="w-[189px]" id="stok" 
                                name="stok" onChange={handleInput}/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="koin">Koin</label>
                                <Input type="number" style="w-[189px]" id="koin" 
                                name="koin" onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="deskripsi">Deskripsi</label>
                            <Textarea style="w-[587px] h-[121px]" id="deskripsi" 
                            name="deskripsi" onChange={handleInput}/>
                        </div>
                        <label htmlFor="">Membantu</label>
                        <ul className="flex flex-col">
                            <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                <img src={checkBox} alt="" />
                                <div className="p-[4px] flex gap-[4px] items-center">
                                    <img src={catEarth} alt="" />
                                    <span className="text-neutral-900 text-[16px] font-[500]">Pengurangan Pemanasan Global</span>
                                </div>
                            </li>
                            <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                <img src={checkBox} alt="" />
                                <div className="p-[4px] flex gap-[4px] items-center">
                                    <img src={catMoney} alt="" />
                                    <span className="text-neutral-900 text-[16px] font-[500]">Hemat Uang</span>
                                </div>
                            </li>
                            <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                <img src={checkBox} alt="" />
                                <div className="p-[4px] flex gap-[4px] items-center">
                                    <img src={catBrain} alt="" />
                                    <span className="text-neutral-900 text-[16px] font-[500]">Memperluas Wawasan</span>
                                </div>
                            </li>
                            <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                <img src={checkBox} alt="" />
                                <div className="p-[4px] flex gap-[4px] items-center">
                                    <img src={catRecycle} alt="" />
                                    <span className="text-neutral-900 text-[16px] font-[500]">Mengurangi Limbah</span>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
};
