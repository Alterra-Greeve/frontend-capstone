import { useParams } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";

import AdminLayout from "@/layouts/AdminLayout";
import { EditChallengeHeader } from "@/components/challenges/header";

import { deleteCurrentImage, getChallengeById } from "@/lib/redux/api/challenges";
import { useEffect, useRef, useState } from "react";
import FormEditChallenge from "@/components/challenges/edit/form";
import { getAllDataImpact } from "@/lib/redux/api/impact";
import ChallengeImage from "@/components/challenges/image";

export default function EditChallengePage() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { isLoading: loadingChallenge } = useAppSelector((state: RootState) => state.challenges);
  const { isLoading: loadingImpact } = useAppSelector((state: RootState) => state.impact);

  const submitRef = useRef<HTMLButtonElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const onSaveFile = (file: File) => setFile(file);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(deleteCurrentImage());

        await dispatch(getChallengeById(id as string));
        await dispatch(getAllDataImpact());
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  if (
    loadingChallenge ||
    loadingImpact
  ) {
    return <AdminLayout>loading</AdminLayout>
  }

  return (
    <AdminLayout>
      <section className="py-6">
        <EditChallengeHeader submitRef={submitRef} />

        <hr className="my-6" />

        <div className="grid grid-cols-5 gap-10 px-6">
          <div className="col-span-2 relative">
            <ChallengeImage onSaveFile={onSaveFile} />
          </div>

          <div className="col-span-3">
            <FormEditChallenge submitRef={submitRef} />
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}