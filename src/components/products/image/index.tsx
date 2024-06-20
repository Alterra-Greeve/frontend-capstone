import { useRef } from 'react';

import EmptyPhoto from '@/assets/icons/EmptyPhoto.svg'
import PlusIcon from '@/assets/icons/PlusPhoto.svg'
import { useAppDispatch } from '@/lib/redux';
import CloseIconBig from '@/assets/icons/CloseIconBig.svg'
import { useToast } from '@/components/ui/use-toast';
import CrossCircle from "@/assets/icons/crossCircle";
import { setTempImage } from '@/lib/redux/api/products';
import EmptyPhotoSmall from '@/assets/icons/EmptyPhotoSmall.svg'

import PlusIconSmall from '@/assets/icons/PlusPhotoSmall.svg'

import CloseIconSmall from '@/assets/icons/CloseIconSmall.svg'
import { nanoid } from '@reduxjs/toolkit';

const validationImage = (file: File) => {
  const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  if (!validImageTypes.includes(file.type)) {
    throw new Error('Invalid file type, only JPEG, PNG, JPG, and WEBP are allowed');
  }

  if (file.size > 1024 * 1024 * 2) {
    throw new Error('File size too large, max 2MB');
  }

  return true;
}

interface ShowImageProps {
  image: string;
  title: string;
  onDelete: () => void;
}

export const ShowBigImage = ({ image, title, onDelete }: ShowImageProps) => (
  <div className="bg-neutral-50 border-1 border border-[#17171712] rounded-xl w-full h-96">
    <img src={image} alt={title} className="w-full h-96 object-cover rounded-xl" />
    <span
      className='absolute top-[5px] right-[5px] cursor-pointer rounded-2xl'
      onClick={onDelete}
    >
      <CloseIconBig />
    </span>
  </div>
)

export const ShowChildImage = ({ image, title, onDelete }: ShowImageProps) => (
  <div className="relative bg-neutral-50 border-1 border border-[#17171712] rounded-xl max-w-full max-h-24">
    <img src={image} alt={title} className="object-cover rounded-xl w-full h-24" />
    <span
      className='absolute top-[0.5px] right-[1px] cursor-pointer rounded-2xl'
      onClick={onDelete}
    >
      <CloseIconSmall />
    </span>
  </div>
)

export const SelectChildImage = ({ onSaveFile, disabled }: { onSaveFile: (file: File) => void; disabled: boolean; }) => {
  const dispatch = useAppDispatch();

  const fileRef = useRef<HTMLInputElement | null>(null);
  const onSelectImage = () => !disabled ? fileRef.current?.click() : null;

  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    const file = fileInput.files?.[0];

    try {
      if (!file) {
        throw new Error('File not found');
      }

      validationImage(file);

      const fileExtension = file.name.split('.').pop();
      const uniqueFileName = `${nanoid()}.${fileExtension}`;

      const urlImage = URL.createObjectURL(new File([file], uniqueFileName, { type: file.type }));

      dispatch(setTempImage(urlImage));
      onSaveFile(file);

    } catch (error) {
      if (error instanceof Error) {
        return toast({
          icon: <CrossCircle />,
          variant: "destructive",
          description: error.message as string
        });
      }
      return toast({
        icon: <CrossCircle />,
        variant: "destructive",
        description: "Failed to upload image"
      });
    } finally {
      fileInput.value = '';
    }
  };


  return (
    <div
      onClick={onSelectImage}
      className={`${disabled ? "bg-neutral-100 hover:cursor-not-allowed" : "hover:cursor-pointer border-[2px] border-dashed border-primary-500 bg-primary-50"} flex justify-center items-center rounded-xl w-full h-24 transition-all hover:bg-neutral-100`}>

      <div className={`relative ${disabled ? "hidden" : "block"}`}>
        <EmptyPhotoSmall />
        <span className="absolute top-7 right-0">
          <PlusIconSmall />
        </span>
      </div>

      <input ref={fileRef}
        onChange={handleFileChange}
        name="file"
        type="file"
        hidden={true}
        accept="image/*"
        disabled={disabled}
      />
    </div>
  )
}

export const SelectBigImage = ({ onSaveFile }: { onSaveFile: (file: File) => void; }) => {
  const dispatch = useAppDispatch();

  const fileRef = useRef<HTMLInputElement | null>(null);
  const onSelectImage = () => fileRef.current?.click();

  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    try {
      if (!file) {
        throw new Error('File not found');
      }
      validationImage(file);
      const urlImage = URL.createObjectURL(file!);

      dispatch(setTempImage(urlImage));
      onSaveFile(file);

    } catch (error) {
      if (error instanceof Error) {
        return toast({
          icon: <CrossCircle />,
          variant: "destructive",
          description: error.message as string
        });
      }
      return toast({
        icon: <CrossCircle />,
        variant: "destructive",
        description: "Failed to upload image"
      });
    }
  }

  return (
    <div
      onClick={onSelectImage}
      className="border-[2px] border-dashed border-primary-500 bg-primary-50 flex justify-center items-center rounded-xl w-full h-96 transition-all hover:cursor-pointer hover:bg-neutral-100"
    >
      <div className="relative">
        <EmptyPhoto />
        <span className="absolute top-[72px] left-[71px]">
          <PlusIcon />
        </span>
      </div>

      <input ref={fileRef}
        onChange={handleFileChange}
        name="file"
        type="file"
        hidden={true}
        accept="image/*"
      />
    </div>
  )
}