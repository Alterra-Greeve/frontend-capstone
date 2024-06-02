import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import profileAlt from "./profile-alt.png";
import { useNavigate } from "react-router-dom";

const ModalUserDetail = ({ isShow = false }: { isShow: any }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={isShow}>
      <DialogContent className="max-w-3xl px-9 py-[30px] rounded-3xl">
        <DialogHeader className="flex flex-col gap-2 justify-center items-center w-auto">
          <div>
            <img src={profileAlt} alt="profile-image" />
          </div>
          <h1 className="text-lg font-semibold">Mikaila Chayani</h1>
        </DialogHeader>
        <section className="text-lg w-auto">
          <div className="grid grid-cols-3 my-[35px] gap-14">
            <div>
              <h1 className="text-lg font-semibold">Username</h1>
              <input
                type="text"
                value={"MikalyaAbc"}
                readOnly
                className="focus:outline-none text-[#7E7E7E]"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Email</h1>
              <input
                type="text"
                value={"MikalyaAbc@gmail.com"}
                readOnly
                className="focus:outline-none text-[#7E7E7E]"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Password</h1>
              <input
                type="password"
                value={"test"}
                readOnly
                className="focus:outline-none text-[#7E7E7E]"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-14">
            <div>
              <h1 className="text-lg font-semibold">No.Telp</h1>
              <input
                type="text"
                value="MikalyaAbc"
                readOnly
                className="focus:outline-none text-[#7E7E7E]"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Alamat</h1>
              <input
                type="text"
                value="MikalyaAbc"
                readOnly
                className="focus:outline-none text-[#7E7E7E]"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Tanggal Lahir</h1>
              <input
                type="text"
                value="MikalyaAbc"
                readOnly
                className="focus:outline-none text-[#7E7E7E]"
              />
            </div>
          </div>

          <div className="w-full flex justify-end mt-14">
            <button
              className="p-[10px] rounded-[7px] border-[1px] border-black bg-[#404040] text-white min-w-[173px]"
              onClick={() => navigate("/users")}
            >
              Kembali
            </button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUserDetail;
