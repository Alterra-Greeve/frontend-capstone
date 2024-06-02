import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import hapus from "./Vector.png";

const ModalDeleteUser = ({ isShow = false }: { isShow: any }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={isShow}>
      <DialogContent className="px-9 py-[30px] rounded-3xl grid  justify-center">
        <DialogHeader className="flex flex-col items-center justify-center w-full gap-7">
          <div className="flex justify-center items-center">
            <img src={hapus} alt="delete-icon"/>
          </div>
          <p className="text-2xl font-medium max-w-[292px] text-center">Yakin ingin menghapus data ini?</p>
        </DialogHeader>
        <div className="w-full flex justify-end mt-14 gap-5">
          <button
            className="p-4 rounded-[7px] border-[1px] border-[#7e7e7e] bg-[#7e7e7e] text-white min-w-[173px]"
            onClick={() => navigate("/users")}
          >
            Hapus
          </button>
          <button
            className="p-4 rounded-[7px] border-[1px] border-black bg-[#404040] text-white min-w-[173px]"
            onClick={() => navigate("/users")}
          >
            Kembali
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeleteUser;
