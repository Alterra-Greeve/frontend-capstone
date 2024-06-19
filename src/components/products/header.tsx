import SearchBar from "@/components/SearchBar/SearchBar";

import ExportIcon from "@/assets/icons/Export.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import ChallengesProducts from "./filter";
import { clearTempImage, searchProducts } from "@/lib/redux/api/products";
import { useAppDispatch } from "@/lib/redux";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import DeleteProductsModal from "@/components/products/modal/delete";

import ArrowLeft from "@/assets/icons/Arrow - Left.svg";
import ConfirmLeaveModal from "@/components/modals/ConfirmLeave";

export const HeaderProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    dispatch(searchProducts(value));
  }

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar placeholder="Cari Nama Product..." onChange={onSearch} />
        <ChallengesProducts />
      </div>
      <div className="flex gap-[10px] items-center ps-[18px] py-1 ">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <ExportIcon />
          Export
        </Button>
        <Button className="gap-2 w-fit rounded-lg px-2" onClick={() => navigate("add")}>
          <PlusIcon />
          Tambah Produk Baru
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState<boolean>(false);

  const onConfirm = () => setConfirm(true);
  const onCloseConfirm = () => setConfirm(false);

  const onSubmit = () => submitRef.current?.click()

  const onBack = () => {
    dispatch(clearTempImage());
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