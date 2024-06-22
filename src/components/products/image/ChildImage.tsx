import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux"
import { SelectChildImage, ShowChildImage } from "@/components/products/image";
import { deleteTempImage } from "@/lib/redux/api/products";

export default function ChildImage({ onSaveFile }: { onSaveFile: (file: File) => void }) {
  const dispatch = useAppDispatch();
  const { imageUrl } = useAppSelector((state: RootState) => state.products);

  const onDelete = (index: number) => dispatch(deleteTempImage(index));

  return (
    imageUrl.length > 0 ? (
      <div className="grid grid-cols-5 w-full gap-2">
        {imageUrl.map((image, index) => (
          index !== 0 && (
            <div className="col-span-1">
              <ShowChildImage key={index}
                image={image}
                title="Product Image"
                onDelete={() => onDelete(index)}
              />
            </div>
          )
        ))}

        {imageUrl.length < 6 && (
          Array.from({ length: 6 - imageUrl.length }).map((_, index) => (
            <div key={index} className="col-span-1">
              <SelectChildImage
                onSaveFile={onSaveFile}
                disabled={index + imageUrl.length !== imageUrl.length}
              />
            </div>
          ))
        )}
      </div>
    ) : (
      <div className="flex items-center gap-2 w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <SelectChildImage key={index}
            onSaveFile={onSaveFile}
            disabled={true}
          />
        ))}
      </div>
    )
  )
}