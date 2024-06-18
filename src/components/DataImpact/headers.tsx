import SearchBar from "../SearchBar/SearchBar";
import Download from "@/assets/icons/Export.svg"
import { Button } from "../ui/button";
import DataImpactChallengeFilter from "./challenges/filter";
import DataImpactOrderFilter from "./order/filter";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import DeleteProductsModal from "@/components/products/modal/delete";

import ArrowLeft from "@/assets/icons/Arrow - Left.svg";
import ConfirmLeaveModal from "@/components/modals/ConfirmLeave";

interface DataImpactChallengeHeadersProps {
  onFilter: (data: {
    username?: string | undefined;
    tantangan?: string | undefined;
  }) => void;
  onSearch: (value: string) => void;
}
export const DataImpactChallengeHeaders = ({ onFilter, onSearch }: DataImpactChallengeHeadersProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value)
    onSearch(value);
  }

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar onChange={handleSearch} placeholder="Cari nama tantangan..." />
        <DataImpactChallengeFilter onFilter={onFilter} />
      </div>

      <div className="flex">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <Download />
          Export
        </Button>
      </div>
    </div>
  )
}

interface DataImpactOrderHeaderProps {
  onFilter: (data: {
    username?: string | undefined;
    productName?: string | undefined;
  }) => void;
  onSearch: (value: string) => void;
}

export const DataImpactOrderHeaders = ({ onSearch, onFilter }: DataImpactOrderHeaderProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  }
  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar onChange={handleSearch} placeholder="Cari Product Name..." />
        <DataImpactOrderFilter onFilter={onFilter} />
      </div>

      <div className="flex">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <Download />
          Export
        </Button>
      </div>
    </div>
  )
}

export const EditProductsHeader = ({ submitRef }: { submitRef: React.RefObject<HTMLButtonElement> }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const onConfirm = () => setConfirm(true);
  const onCloseConfirm = () => setConfirm(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onSubmit = () => submitRef.current?.click()

  const onBack = () => {
    // dispatch(clearSingleData());
    navigate("../");
  }

  return (
    <div className="flex items-center justify-between px-6">
      <DeleteProductsModal
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
          Edit Product
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

export const AddProductsHeader = ({ submitRef }: { submitRef: React.RefObject<HTMLButtonElement> }) => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState<boolean>(false);

  const onConfirm = () => setConfirm(true);
  const onCloseConfirm = () => setConfirm(false);

  const onSubmit = () => submitRef.current?.click()

  const onBack = () => {
    // dispatch(clearSingleData());
    navigate("../");
  }

  return (
    <div className="flex items-center justify-between px-6">
      <ConfirmLeaveModal
        isOpen={confirm}
        onClose={onCloseConfirm}
        onBack={onBack}
      />

      <div className="flex gap-3 cursor-pointer hover:underline" onClick={onConfirm}>
        <ArrowLeft />
        <span>
          Add Product
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