import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";
import { Button } from "@/components/ui/button";

const DeleteDialog = ({
  isOpen,
  onClose,
  onDelete,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-neutral-50 flex flex-col items-center md:rounded-2xl">
        <IllustrationDelete />
        <DialogHeader className="items-center pt-6">
          <h1 className="text-2xl font-bold text-neutral-900">
            Yakin ingin menghapus forum ini?
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
  );
};

export default DeleteDialog;
