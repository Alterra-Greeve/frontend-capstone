import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { deleteCurrentImage } from "@/lib/redux/api/challenges";

import CloseIconBig from '@/assets/icons/CloseIconBig.svg'
import AddImageChallenge from "@/components/challenges/image/AddImage";

interface ShowImageProps {
  image: string | undefined;
  title: string | undefined;
  onDelete: () => void;
}

const ShowImage = ({ image, title, onDelete }: ShowImageProps) => (
  <div className="bg-neutral-50 p-1 border-1 border border-[#17171712] rounded-xl w-full h-96">
    <img src={image} alt={title} className="w-full h-96 object-cover rounded-xl" />
    <span
      className='absolute top-2 right-2 cursor-pointer bg-white p-0 rounded-2xl'
      onClick={onDelete}
    >
      <CloseIconBig />
    </span>
  </div>
)

export default function ChallengeImage({ onSaveFile }: { onSaveFile: (file: File) => void }) {
  const dispatch = useAppDispatch();
  const { singleData } = useAppSelector((state: RootState) => state.challenges);

  const onDeleteImage = () => {
    dispatch(deleteCurrentImage());
  }

  return (
    singleData?.image_url !== undefined && singleData?.image_url !== ''
      ? <ShowImage image={singleData?.image_url} title={singleData?.title || ""} onDelete={onDeleteImage} />
      : <AddImageChallenge onSaveFile={onSaveFile} />
  )
}