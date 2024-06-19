import { useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import IllustrationSuccess from "@/assets/icons/success-edit.svg";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";
import { GreeveApi } from "@/lib/axios";
import { useNavigate, useParams } from "react-router-dom";

import CheckCircle from "@/assets/icons/checkCircle";
import CrossCircle from "@/assets/icons/crossCircle";
import { useToast } from "@/components/ui/use-toast";
import { updateProductById } from "@/lib/redux/api/products";

interface DetailChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  file?: File[] | null;
}

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  illustration: JSX.Element;
  actions: JSX.Element;
  className?: string;
}

const Modal = ({ isOpen, title, message, illustration, actions, className }: ModalProps) => (
  <Dialog open={isOpen}>
    <DialogContent className={`max-w-md bg-neutral-50 flex flex-col items-center md:rounded-2xl px-9 ${className}`}>
      {illustration}
      <DialogHeader className="items-center py-6 gap-1">
        <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
        <p className="text-neutral-900 text-lg text-center">{message}</p>
      </DialogHeader>
      <DialogFooter className="w-full flex justify-center items-center gap-5">{actions}</DialogFooter>
    </DialogContent>
  </Dialog>
);

const ModalSuccessAdd = ({ isOpen, onClose }: DetailChallengeModalProps) => (
  <Modal
    isOpen={isOpen}
    title="Data berhasil disimpan!"
    message="Data disimpan! Semua perubahan telah berhasil disimpan."
    illustration={<IllustrationSuccess />}
    actions={
      <Button className="min-w-full py-6 rounded-lg" variant={"primary"} onClick={onClose}>
        Tutup
      </Button>
    }
  />
);

const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await GreeveApi.post("/media/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return response.data.data.image_url;
  } catch (error) {
    console.error(error);
  }
}

export default function ModalConfirmEditProduct({ isOpen, onClose, file }: DetailChallengeModalProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { singleData } = useAppSelector((state: RootState) => state.products);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onCloseSuccess = () => setIsSuccess(false);

  const { toast } = useToast();

  const onSubmit = async () => {
    if (!singleData) {
      console.error("Data not found");
      return;
    }

    setLoading(true);

    try {
      let newImageUrl: string[] = singleData.image_url || [];

      if (file && Array.isArray(file) && file.length > 0) {
        const imgUploadPromises = file.map((f) => uploadImage(f));
        const uploadImageUrl = await Promise.all(imgUploadPromises);

        newImageUrl = [...newImageUrl, ...uploadImageUrl];
      }

      const response = await dispatch(updateProductById({
        id: id as string,
        data: {
          ...singleData,
          image_url: newImageUrl,
          category: singleData.category,
        }
      }));

      if (response.meta.requestStatus === "fulfilled") {
        navigate("../");
        onClose();

        toast({
          icon: <CheckCircle />,
          variant: "default",
          description: "Berhasil memperbarui product!",
        });

      } else {
        onClose();
        toast({
          icon: <CrossCircle />,
          variant: "default",
          description: "Products gagal diperbarui!",
        });
      }

    } catch (error) {
      console.error("Failed to update challenge:", error);
      toast({
        icon: <CrossCircle />,
        variant: "default",
        description: "Product gagal diperbarui!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen}>
      <ModalSuccessAdd isOpen={isSuccess} onClose={onCloseSuccess} />
      <Modal
        className="max-w-lg"
        isOpen={isOpen}
        title="Ingin menyimpan data ini?"
        message="Perubahan dari data sebelumnya akan tersimpan"
        illustration={<IllustrationDelete />}
        actions={
          <div className="w-full flex justify-center items-center gap-5">
            <Button className="w-full py-6 rounded-lg" variant={"outline_primary"} disabled={loading} onClick={onClose}>
              Tidak
            </Button>
            <Button className="w-full py-6 rounded-lg" variant={"primary"} disabled={loading} onClick={onSubmit}>
              Iya, Simpan
            </Button>
          </div>
        }
      />
    </Dialog>
  )
}