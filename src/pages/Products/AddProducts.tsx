import Button from "@/components/Button/Button";
import AdminLayout from "@/layouts/AdminLayout";
import ArrowLeft from "@/assets/icons/Arrow - Left.svg";
import SubDefault from "@/assets/icons/sub-default-pic.svg";
import CatEarth from "@/assets/icons/catEarth.svg";
import CatMoney from "@/assets/icons/catMoney.svg";
import CatBrain from "@/assets/icons/catBrains.svg";
import CatRecycle from "@/assets/icons/catRecycle.svg";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import EmptyPhoto from '@/assets/icons/EmptyPhoto.svg'
import PlusIcon from '@/assets/icons/PlusPhoto.svg'
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
    const [newData, setNewData] = useState({});
    const [arrCategory, setArrCategory] = useState<any>([])
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate()
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = `${date < 10 ? `0${date}` : date}/${month < 10 ? `0${month}` : month}/${year}`
    function handleInput(e: any) {
        const { value, name } = e.target;
        setNewData({ ...newData, [name]: value });
    }
    function handleCheck(e: any) {
        const { checked, value } = e.target;
        if (checked) {
            if (!arrCategory.includes(value)) {
                setArrCategory([...arrCategory, value]);
            }
        } else {
            setArrCategory(arrCategory.filter((item: any) => item !== value));
        }
    }
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    }
    function onClickFile(){
        fileRef.current?.click()
    }
    // let data = {
    //     name: "product test",
    //     description: "product",
    //     coin: 200,
    //     price: 30000,
    //     category: [
    //         "e965bc1d-9bfa-4512-8e28-64a101201d9d",
    //         "e965bc1d-9bfa-4512-8e28-64a101201d9e",
    //         "e965bc1d-9bfa-4512-8e28-64a101201d9f",
    //     ],
    //     image_url: [
    //         "https://example.com/images/water-bottle3.jpg",
    //         "https://example.com/images/water-bottle3.jpg",
    //         "https://example.com/images/water-bottle3.jpg",
    //     ],
    // };

    // const { postData } = useFetch("products", { method: "post" });
    function handleSubmit() {
        setNewData({ ...newData, category: arrCategory });
        console.log(newData)
        // postData(data);
    }

    return (
        <AdminLayout>
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
                        <Button variant="primary" className='p-[8px]' onClick={() => handleSubmit()}>
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
                    rounded-[8px] max-h-[418px]"
                    >
                        <div className="flex flex-col gap-[5px]">
                            <div className="border-[2px] border-dashed border-primary-500 rounded-[8px] bg-primary-50
                            flex justify-center items-center min-h-[300px] hover:cursor-pointer">
                                {!selectedFile && (
                                    <>
                                        <div className="w-[116px] h-[116px] relative" onClick={() => onClickFile()}>
                                            <EmptyPhoto/>
                                            <span className="absolute top-[72px] left-[71px]">
                                                <PlusIcon/>
                                            </span>
                                        </div>
                                        <input ref={fileRef} type="file" name="file" className="hidden" 
                                        onChange={(e) => handleFileChange(e)}/>
                                    </>
                                )}
                            </div>
                            <div className="flex gap-[4px]">
                                <div>{<SubDefault />}</div>
                                <div>{<SubDefault />}</div>
                                <div>{<SubDefault />}</div>
                                <div>{<SubDefault />}</div>
                                <div>{<SubDefault />}</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-[12px] font-[600] text-neutral-800 flex flex-col gap-[8px]"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="namaProduk">Nama Produk</label>
                            <Input
                                type="text"
                                style="w-full"
                                id="namaProduk"
                                name="namaProduk"
                                onChange={handleInput}
                            />
                        </div>
                        <div className="flex gap-[10px]">
                            <div className="flex flex-col">
                                <label htmlFor="harga">Harga</label>
                                <Input
                                    type="number"
                                    style="w-[189px]"
                                    id="harga"
                                    name="harga"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="stok">Stok</label>
                                <Input
                                    type="number"
                                    style="w-[189px]"
                                    id="stok"
                                    name="stok"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="koin">Koin</label>
                                <Input
                                    type="number"
                                    style="w-[189px]"
                                    id="koin"
                                    name="koin"
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="deskripsi">Deskripsi</label>
                            <Textarea
                                style="w-[587px] h-[121px]"
                                id="deskripsi"
                                name="deskripsi"
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Membantu</label>
                            <ul className="flex flex-col">
                                <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                    <input type="checkbox" name="Pemanasan Global" id="" value="Pemanasan Global" onChange={handleCheck} />
                                    <div className="p-[4px] flex gap-[4px] items-center">
                                        <CatEarth />
                                        <span className="text-neutral-900 text-[16px] font-[500]">
                                            Pengurangan Pemanasan Global
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                    <input type="checkbox" name="Hemat Uang" id="" value="Hemat Uang" onChange={handleCheck} />
                                    <div className="p-[4px] flex gap-[4px] items-center">
                                        <CatMoney />
                                        <span className="text-neutral-900 text-[16px] font-[500]">
                                            Hemat Uang
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                    <input type="checkbox" name="Memperluas Wawasan" id="" value="Memperluas Wawasan" onChange={handleCheck} />
                                    <div className="p-[4px] flex gap-[4px] items-center">
                                        <CatBrain />
                                        <span className="text-neutral-900 text-[16px] font-[500]">
                                            Memperluas Wawasan
                                        </span>
                                    </div>
                                </li>
                                <li className="flex gap-[8px] py-[4px] px-[8px] items-center">
                                    <input type="checkbox" name="Mengurangi Limbah" id="" value="Mengurangi Limbah" onChange={handleCheck} />
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
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
