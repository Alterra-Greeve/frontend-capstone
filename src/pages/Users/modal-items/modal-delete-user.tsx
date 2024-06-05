import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import yesornoIcon from "./Yes_or_no_icon.svg";
import Button from "@/components/Button/Button";

const ModalDeleteUser = ({ isShow = false }: { isShow: any }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={isShow}>
      <DialogContent className="w-[500px] max-w-full p-8 sm:rounded-[20px] grid  justify-center">
        <DialogHeader className="flex flex-col items-center justify-center w-full gap-8">
          <div className="flex justify-center items-center">
            <img src={yesornoIcon} alt="delete-icon" />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center text-neutral-900">
            <p className="text-2xl font-bold max-w-auto text-center">
              Yakin ingin menghapus data ini?
            </p>
            <p className="text-lg leading-5 font-normal text-center w-auto tracking-tighter">
              Penghapusan bersifat permanen dan tidak bisa dibatalkan
            </p>
          </div>
        </DialogHeader>
        <div className="w-full flex justify-end mt-14 gap-5 text-sm leading-6 font-medium">
          <Button
            children="Tidak"
            variant="secondary"
            onClick={() => navigate("")}
          />
          <Button
            children="Ya , Hapus"
            variant="primary"
            onClick={() => navigate("")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeleteUser;
