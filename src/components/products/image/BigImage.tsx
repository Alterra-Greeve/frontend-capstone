import { RootState, useAppDispatch, useAppSelector } from '@/lib/redux';
import { deleteTempImage } from '@/lib/redux/api/products';
import { SelectBigImage, ShowBigImage } from '@/components/products/image';

export default function AddBigImageProduct({ onSaveFile }: { onSaveFile: (file: File) => void }) {
  const dispatch = useAppDispatch();
  const { imageUrl } = useAppSelector((state: RootState) => state.products);

  const onDelete = () => dispatch(deleteTempImage(0));

  return (
    imageUrl.length > 0
      ? <ShowBigImage image={imageUrl[0]} title="Product Image" onDelete={onDelete} />
      : <SelectBigImage onSaveFile={onSaveFile} />
  )
}