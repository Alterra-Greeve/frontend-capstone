import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/redux";
import { deleteChallenge } from "@/lib/redux/api/challenges";
import { useToast } from "@/components/ui/use-toast";

import CheckCircle from "@/assets/icons/checkCircle";
import CrossCircle from "@/assets/icons/crossCircle";
import { useNavigate } from "react-router-dom";

interface DetailChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  onBackHref?: string;
}

export default function DeleteChallengeModal({ isOpen, onClose, id, onBackHref }: DetailChallengeModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { toast } = useToast();

  const onDelete = async () => {
    const response = await dispatch(deleteChallenge(id));

    if (response.meta.requestStatus === "fulfilled") {
      toast({
        icon: <CheckCircle />,
        variant: "default",
        description: "Data berhasil dihapus!"
      });

      onClose();
      onBackHref && navigate(onBackHref);
    } else {
      toast({
        icon: <CrossCircle />,
        variant: "default",
        description: "Data gagal dihapus!"
      });
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-neutral-50 flex flex-col items-center md:rounded-2xl">
        <IllustrationDelete />
        <DialogHeader className="items-center pt-6">
          <h1 className="text-2xl font-bold text-neutral-900">
            Yakin ingin menghapus data ini?
          </h1>
          <p className="text-neutral-900 text-lg mt-2 text-center">
            Penghapusan bersifat permanen dan tidak bisa dibatalkan
          </p>
        </DialogHeader>
        <DialogFooter className="px-5 pt-5">
          <div className="w-full flex justify-center items-center gap-5">
            <Button
              className="min-w-full py-6 rounded-lg"
              variant={"outline_primary"}
              onClick={onClose}
            >
              Tidak
            </Button>
            <Button
              className="min-w-full py-6 rounded-lg"
              variant={"primary"}
              onClick={onDelete}
            >
              Iya, Hapus
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}