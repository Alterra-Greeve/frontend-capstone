import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/lib/redux";
import { clearSingleData } from "@/lib/redux/api/challenges";

interface DetailChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackHref?: string;
}

export default function ConfirmLeaveChallengeModal({ isOpen, onClose, onBackHref }: DetailChallengeModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    dispatch(clearSingleData());
    navigate(onBackHref!);
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-neutral-50 flex flex-col items-center md:rounded-2xl">
        <IllustrationDelete />
        <DialogHeader className="items-center pt-6">
          <h1 className="text-2xl font-bold text-neutral-900">
            Perubahan belum disimpan!
          </h1>
          <p className="text-neutral-900 text-lg mt-2 text-center">
            Anda telah mengubah beberapa informasi. Pastikan untuk menyimpan agar tidak kehilangan perubahan ini
          </p>
        </DialogHeader>
        <DialogFooter className="px-5 pt-5">
          <div className="w-full flex justify-center items-center gap-5">
            <Button
              className="min-w-full py-6 rounded-lg"
              variant={"outline_primary"}
              onClick={handleBack}
            >
              Keluar
            </Button>
            <Button
              className="min-w-full py-6 rounded-lg"
              variant={"primary"}
              onClick={onClose}
            >
              Tetap Disini
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}