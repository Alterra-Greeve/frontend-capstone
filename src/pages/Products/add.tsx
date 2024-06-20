import { useEffect, useRef, useState } from "react";
import { AddProductsHeader } from "@/components/products/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import AdminLayout from "@/layouts/AdminLayout";
import FormAddProduct from "@/components/products/add/form";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getAllDataImpact } from "@/lib/redux/api/impact";
import Loading from "@/components/loading";
import AddBigImageProduct from "@/components/products/image/BigImage";
import ChildImage from "@/components/products/image/ChildImage";
import { clearTempImage } from "@/lib/redux/api/products";

export default function AddProductsPage() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state: RootState) => state.impact);

  const submitRef = useRef<HTMLButtonElement | null>(null);
  const date = new Date().toISOString().split("T")[0];

  const [file, setFile] = useState<File[] | null>(null);

  const onSaveFile = (newFile: File) => {
    setFile((prevFiles) => (prevFiles ? [...prevFiles, newFile] : [newFile]));
  };

  useEffect(() => {
    (async () => {
      dispatch(clearTempImage());
      await dispatch(getAllDataImpact());
    })();

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <section className="flex flex-col gap-[16px] bg-primary-50 m-[24px]">
        <AddProductsHeader submitRef={submitRef} />

        <hr/>

        <div className="flex flex-col w-full gap-[16px]">
          <div className="flex flex-col w-[328px]">
            <Label className="text-[12px] font-[600] text-neutral-400">Create Data</Label>
            <Input value={date} disabled className="text-neutral-500 text-[12px] font-[500] bg-neutral-300 rounded-[7px] border-0 p-[8px]" />
          </div>

          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-2 relative bg-white h-fit p-[4px] rounded-xl flex flex-col gap-[5px]">
              <AddBigImageProduct onSaveFile={onSaveFile} />
              <ChildImage onSaveFile={onSaveFile} />
            </div>

            <div className="col-span-3">
              <FormAddProduct submitRef={submitRef} file={file} />
            </div>
          </div>
        </div>

        <Toaster />
      </section>
    </AdminLayout>
  )
}