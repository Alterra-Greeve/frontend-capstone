import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/redux";
import { deleteUser } from "@/lib/redux/api/users";

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export default function DeleteUserModal({
  isOpen,
  onClose,
  userId,
}: DeleteUserModalProps) {
  const dispatch = useAppDispatch();

  const onDelete = async () => {
    await dispatch(deleteUser(userId));
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-neutral-50 flex flex-col items-center gap-8 md:rounded-2xl p-8">
        <DialogHeader className="flex flex-col gap-8 items-center">
          <IllustrationDelete />
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold leading-8 text-neutral-900">
              Yakin ingin menghapus data ini?
            </h1>
            <p className="text-neutral-900 text-base leading-5 mt-2 text-center">
              Penghapusan bersifat permanen dan tidak bisa dibatalkan
            </p>
          </div>
        </DialogHeader>
        <DialogFooter className="w-full grid grid-cols-2 gap-x-6">
          <Button
            className="py-6 text-sm leading-6 font-medium rounded-lg col-span-1"
            variant={"outline_primary"}
            onClick={onClose}
          >
            Tidak
          </Button>
          <Button
            className="py-6 text-sm leading-6 font-medium rounded-lg col-span-1 border border-primary-600"
            variant={"primary"}
            onClick={onDelete}
          >
            Iya, Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
