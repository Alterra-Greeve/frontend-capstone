import { useEffect, useRef, useState } from "react";
import { EditProductsHeader } from "@/components/products/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getAllDataImpact } from "@/lib/redux/api/impact";
import Loading from "@/components/loading";
import { clearTempImage, getProductById } from "@/lib/redux/api/products";
import { useParams } from "react-router-dom";
import FormEditProduct from "@/components/products/edit/form";
import AddBigImageProduct from "@/components/products/image/BigImage";
import ChildImage from "@/components/products/image/ChildImage";

export default function EditProductsPage() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { isLoading: loadingImpacts } = useAppSelector((state: RootState) => state.impact);
  const {
    singleData: product,
    isLoading: loadingProduct
  } = useAppSelector((state: RootState) => state.products);

  const submitRef = useRef<HTMLButtonElement | null>(null);

  const [file, setFile] = useState<File[] | null>(null);

  const onSaveFile = (newFile: File) => {
    setFile((prevFiles) => (prevFiles ? [...prevFiles, newFile] : [newFile]));
  };

  useEffect(() => {
    (async () => {
      dispatch(clearTempImage());
      await dispatch(getProductById(id as string));
      await dispatch(getAllDataImpact());
    })();

    // eslint-disable-next-line
  }, []);

  if (
    loadingImpacts ||
    loadingProduct
  ) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <section className="flex flex-col gap-[16px] bg-primary-50 m-[24px]">
        <EditProductsHeader submitRef={submitRef} />

        <hr/>

        <div className="flex flex-col w-full gap-[16px]">
          <div className="flex flex-col w-[328px]">
            <Label className="text-[12px] font-[600] text-neutral-400">Create Data</Label>
            <Input value={product?.created_at} disabled className="text-neutral-500 text-[12px] font-[500] bg-neutral-300 rounded-[7px] border-0 p-[8px]" />
          </div>

          <div className="grid grid-cols-5 gap-[10px]">
            <div className="col-span-2 relative bg-white h-fit p-[4px] rounded-xl flex flex-col gap-[5px]">
              <AddBigImageProduct onSaveFile={onSaveFile} />
              <ChildImage onSaveFile={onSaveFile} />
            </div>

            <div className="col-span-3">
              <FormEditProduct submitRef={submitRef} file={file} />
            </div>
          </div>
        </div>

        <Toaster />
      </section>
    </AdminLayout>
  )
}