import { useRef } from 'react';

import EmptyPhoto from '@/assets/icons/EmptyPhoto.svg'
import PlusIcon from '@/assets/icons/PlusPhoto.svg'
import { useAppDispatch } from '@/lib/redux';
import { setImageUrl } from '@/lib/redux/api/challenges';

export default function AddImageChallenge({ onSaveFile }: { onSaveFile: (file: File) => void }) {
  const dispatch = useAppDispatch();

  const fileRef = useRef<HTMLInputElement | null>(null);
  const onSelectImage = () => fileRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const urlImage = URL.createObjectURL(file!);

    dispatch(setImageUrl(urlImage));
    onSaveFile(file!);
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