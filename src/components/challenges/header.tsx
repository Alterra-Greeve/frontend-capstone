import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

import ExportIcon from "@/assets/icons/Export.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import ArrowLeft from "@/assets/icons/Arrow - Left.svg";

import SearchBar from "@/components/SearchBar/SearchBar";
import ChallengesFilter from "@/components/challenges/filter";
import DeleteChallengeModal from "@/components/challenges/modal/delete";
import ConfirmLeaveChallengeModal from "./modal/ConfirmLeave";

export const ChallengesHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar />
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

  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const onConfirm = () => setConfirm(true);
  const onCloseConfirm = () => setConfirm(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onSubmit = () => submitRef.current?.click()

  return (
    <div className="flex items-center justify-between px-6">
      <DeleteChallengeModal
        id={id as string}
        onClose={onClose}
        isOpen={open}
        onBackHref={"../"}
      />

      <ConfirmLeaveChallengeModal
        isOpen={confirm}
        onClose={onCloseConfirm}
        onBackHref={"../"}
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
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const onSubmit = () => submitRef.current?.click()

  return (
    <div className="flex items-center justify-between px-6">
      <ConfirmLeaveChallengeModal
        isOpen={open}
        onClose={onClose}
        onBackHref={"../"}
      />

      <div className="flex gap-3 cursor-pointer hover:underline" onClick={onOpen}>
        <ArrowLeft />
        <span>
          Add Challenge
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={onSubmit}>
          Simpan Data
        </Button>
      </div>
    </div>
  )
}