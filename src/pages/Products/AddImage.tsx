import EmptyPhoto from '@/assets/icons/EmptyPhoto.svg'
import EmptyPhotoSmall from '@/assets/icons/EmptyPhotoSmall.svg'
import PlusIcon from '@/assets/icons/PlusPhoto.svg'
import PlusIconSmall from '@/assets/icons/PlusPhotoSmall.svg'
import CloseIconBig from '@/assets/icons/CloseIconBig.svg'
import CloseIconSmall from '@/assets/icons/CloseIconSmall.svg'
import { GreeveApiMediaUpload } from '@/lib/axios'
import { useRef, useState } from "react";

type imageProp = {
    imageSize: 'big' | 'small';
    newData: any;
    setNewData: (image: any) => void;
}

export default function AddImage({ imageSize, setNewData, newData }: imageProp) {
    const [selectedFile, setSelectedFile] = useState<string>('');
    const fileRef = useRef<HTMLInputElement | null>(null);
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        if (files && files.length > 0) {
            handleUpload(files[0])
            setSelectedFile(files[0] ?
                URL.createObjectURL(files[0]) : 'no image'
            );
        }
    }
    async function handleUpload(file: File): Promise<void> {
        const formData = new FormData();
        formData.append("image", file);
        try {
            const response = await GreeveApiMediaUpload.post('/media/upload', formData);
            setNewData({ ...newData, image_url: [...newData.image_url, response.data.data.image_url] })
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
    function onClickFile() {
        fileRef.current?.click()
    }
    function handleClose() {

    }
    // array yang dibalikin nanti jadi length yg nentuin pergerakan 
    // style dari border add photo sama no photo
    if (imageSize === 'big') {
        return (
            <>
                {!selectedFile && (
                    <div className="border-[2px] border-dashed border-primary-500 rounded-[8px] bg-primary-50
                    flex justify-center items-center h-[300px] w-[531px] hover:cursor-pointer" onClick={() => onClickFile()}>
                        <div className="w-[116px] h-[116px] relative">
                            <EmptyPhoto />
                            <span className="absolute top-[72px] left-[71px]">
                                <PlusIcon />
                            </span>
                        </div>
                        <input ref={fileRef} type="file" name="file" className="hidden"
                            onChange={(e) => handleFileChange(e)} />
                    </div>
                )}
                {selectedFile && (
                    <div className='relative'>
                        <img src={selectedFile} alt='' className="rounded-[8px] h-[300px] w-[531px] " />
                        <span className='absolute top-[1px] right-[1px] cursor-pointer'
                            onClick={() => handleClose()}>
                            <CloseIconBig />
                        </span>
                    </div>
                )}
            </>
        )
    } else if (imageSize === 'small') {
        return (
            <>
                {!selectedFile && (
                    <div className="border-[2px] border-dashed border-primary-500 rounded-[8px] bg-primary-50
                    flex justify-center items-center h-[103px] w-[103px] hover:cursor-pointer" onClick={() => onClickFile()}>
                        <div className="w-[50px] h-[50px] relative">
                            <EmptyPhotoSmall />
                            <span className="absolute top-[31px] left-[30px]">
                                <PlusIconSmall />
                            </span>
                        </div>
                        <input ref={fileRef} type="file" name="file" className="hidden"
                            onChange={(e) => handleFileChange(e)} />
                    </div>
                )}
                {selectedFile && (
                    <div className='relative'>
                        <img src={selectedFile} alt='' className="rounded-[8px] h-[103px] w-[103px]" />
                        <span className='absolute top-[0.5px] right-[1px] cursor-pointer'
                            onClick={() => handleClose()}>
                            <CloseIconSmall />
                        </span>
                    </div>
                )}
            </>
        )
    }
};
