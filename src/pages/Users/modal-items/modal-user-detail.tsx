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
import Button from "@/components/Button/Button";

const ModalUserDetail = ({ isShow = false }: { isShow: any }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={isShow} >
      <DialogContent className="min-w-[750px] p-8 sm:rounded-[20px] gap-0">
        <DialogHeader className="flex flex-col gap-[17px] justify-center items-center w-auto">
          <div className="w-[100px] rounded-full">
            <img
              src={profileAlt}
              alt="profile-image"
              className="w-full rounded-full"
            />
          </div>
          <h1 className="text-2xl leading-8 font-bold">Mikaila Chayani</h1>
        </DialogHeader>
        <section className="flex flex-col gap-10 mt-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="" className="text-lg leading-5 font-bold">
                Username
              </label>
              <input
                type="text"
                value={"MikalyaAbc"}
                className="text-neutral-500 text-base leading-5 font-semibold bg-transparent"
                disabled
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="" className="text-lg leading-5 font-bold">
                Email
              </label>
              <input
                type="text"
                value={"MikalyaAbc@gmail.com"}
                className="text-neutral-500 text-base leading-5 font-semibold bg-transparent"
                disabled
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="" className="text-lg leading-5 font-bold">
                Gender
              </label>
              <input
                type="text"
                value="Perempuan"
                className="text-neutral-500 text-base leading-5 font-semibold bg-transparent"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="" className="text-lg leading-5 font-bold">
                No.Telp
              </label>
              <input
                type="text"
                value="MikalyaAbc"
                className="text-neutral-500 text-base leading-5 font-semibold bg-transparent"
                disabled
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="" className="text-lg leading-5 font-bold">
                Alamat
              </label>
              <input
                type="text"
                value="MikalyaAbc"
                className="text-neutral-500 text-base leading-5 font-semibold bg-transparent"
                disabled
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="" className="text-lg leading-5 font-bold">
                Akun Terbuat Tanggal
              </label>
              <input
                type="text"
                value="MikalyaAbc"
                className="text-neutral-500 text-base leading-5 font-semibold bg-transparent"
                disabled
              />
            </div>
          </div>
        </section>
        <div className="w-full flex justify-end mt-8">
          <div className="w-[250px] text-sm leading-6 font-medium text-neutral-100">
            <Button
              variant="primary"
              children="tutup"
              icon=""
              onClick={() => navigate("")}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUserDetail;
