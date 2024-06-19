import { useEffect, useRef, useState } from "react";
import FormAddChallenge from "@/components/challenges/add/form";
import { AddChallengeHeader } from "@/components/challenges/header";
import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getAllDataImpact } from "@/lib/redux/api/impact";
import ChallengeImage from "@/components/challenges/image";
import { deleteCurrentImage } from "@/lib/redux/api/challenges";
import Loading from "@/components/loading";
import { Toaster } from "@/components/ui/toaster";

export default function AddChallengePage() {
  const dispatch = useAppDispatch();
  const submitRef = useRef<HTMLButtonElement | null>(null);

  const { isLoading } = useAppSelector((state: RootState) => state.impact);

  const [file, setFile] = useState<File | null>(null);
  const onSaveFile = (file: File) => setFile(file);

  useEffect(() => {
    (async () => {
      dispatch(deleteCurrentImage());
      await dispatch(getAllDataImpact());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <section className="py-6">
        <AddChallengeHeader submitRef={submitRef} />

        <hr className="my-6" />

        <div className="grid grid-cols-5 gap-10 px-6">
          <div className="col-span-2 relative">
            <ChallengeImage onSaveFile={onSaveFile} />
          </div>

          <div className="col-span-3">
            <FormAddChallenge submitRef={submitRef} file={file} />
          </div>
        </div>

        <Toaster />
      </section>
    </AdminLayout>
  )
}