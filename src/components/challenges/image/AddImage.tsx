import { useRef } from 'react';

import EmptyPhoto from '@/assets/icons/EmptyPhoto.svg'
import PlusIcon from '@/assets/icons/PlusPhoto.svg'
import { useAppDispatch } from '@/lib/redux';
import { setImageUrl } from '@/lib/redux/api/challenges';
import { useToast } from '@/components/ui/use-toast';
import CrossCircle from "@/assets/icons/crossCircle";

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

export default function AddImageChallenge({ onSaveFile }: { onSaveFile: (file: File) => void }) {
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

      dispatch(setImageUrl(urlImage));
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
      className="border-[2px] border-dashed border-primary-500  bg-primary-50 flex justify-center items-center rounded-xl w-full h-96 transition-all hover:cursor-pointer hover:bg-neutral-100"
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