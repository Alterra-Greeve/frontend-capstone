import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

import ExportIcon from "@/assets/icons/Export.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import ArrowLeft from "@/assets/icons/Arrow - Left.svg";

import SearchBar from "@/components/SearchBar/SearchBar";
import ChallengesFilter from "@/components/challenges/filter";
import DeleteChallengeModal from "@/components/challenges/modal/delete";
import { useAppDispatch } from "@/lib/redux";
import { clearSingleData, searchChallenges } from "@/lib/redux/api/challenges";
import ConfirmLeaveModal from "@/components/modals/ConfirmLeave";
import AiChallengeModal from "./modal/ai";

export const ChallengesHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(searchChallenges(value));
  }

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar placeholder="Cari Judul Tantangan..." onChange={onSearch} />
        <ChallengesFilter />
      </div>
      <div className="flex gap-[10px] items-center ps-[18px] py-1 ">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <ExportIcon />
          Export
        </Button>
        <Button className="gap-2 w-fit rounded-lg px-2" onClick={() => navigate("add")}>
          <PlusIcon />
          Tambah Tantangan Baru
        </Button>
      </div>
    </div>
  )
}

export const EditChallengeHeader = ({ submitRef }: { submitRef: React.RefObject<HTMLButtonElement> }) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const onConfirm = () => setConfirm(true);
  const onCloseConfirm = () => setConfirm(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onSubmit = () => submitRef.current?.click()

  const onBack = () => {
    dispatch(clearSingleData());
    navigate("../");
  }

  return (
    <div className="flex items-center justify-between px-6">
      <DeleteChallengeModal
        id={id as string}
        onClose={onClose}
        isOpen={open}
        onBackHref={"../"}
      />

      <ConfirmLeaveModal
        isOpen={confirm}
        onClose={onCloseConfirm}
        onBack={onBack}
      />

      <div className="flex gap-3 cursor-pointer hover:underline" onClick={onConfirm}>
        <ArrowLeft />
        <span>
          Edit Challenge
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Button variant={"outline_primary"} onClick={onOpen}>
          Hapus Data
        </Button>
        <Button onClick={onSubmit}>
          Simpan Data
        </Button>
      </div>
    </div>
  )
}

export const AddChallengeHeader = ({ submitRef }: { submitRef: React.RefObject<HTMLButtonElement> }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [showAi, setShowAi] = useState<boolean>(false);

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const onShowAi = () => setShowAi(true)
  const onCloseAi = () => setShowAi(false)

  const onSubmit = () => submitRef.current?.click()

  const onBack = () => {
    dispatch(clearSingleData());
    navigate("../");
  }

  return (
    <div className="flex items-center justify-between px-6">
      <ConfirmLeaveModal
        isOpen={open}
        onClose={onClose}
        onBack={onBack}
      />

      <AiChallengeModal isOpen={showAi} onClose={onCloseAi} />

      <div className="flex gap-3 cursor-pointer hover:underline" onClick={onOpen}>
        <ArrowLeft />
        <span>
          Add Challenge
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Button variant={"outline_primary"} onClick={onShowAi}>
          Tanya AI untuk Saran
        </Button>
        <Button onClick={onSubmit}>
          Simpan Data
        </Button>
      </div>
    </div>
  )
}