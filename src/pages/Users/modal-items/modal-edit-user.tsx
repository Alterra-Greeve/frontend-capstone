import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import profileAlt from "./profile-alt.png";
import { useNavigate } from "react-router-dom";

const ModalEditUser = ({ isShow = false }: { isShow: any }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={isShow}>
      <DialogContent className="w-[483px] p-[30px]">
        <div className="grid grid-cols-1">
          <div className="flex flex-col gap-[30px]">
            <div className="grid grid-cols-2">
              <div className="rounded-full">
                <img src={profileAlt} alt="profile-img" />
              </div>
              <div className="flex justify-center items-center">
                <button className="py-1 px-2  rounded-[7px] border-[1px] border-black">
                  Copy Link
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-semibold">Fulan Bin Fulan</h1>
              <p className="text-xs font-normal text-[#1E1E1E99]">
                loremipsum@gmail.com
              </p>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-[9px] border-b-[1px] border-[#1E1E1E66] pb-5">
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="name" className="text-xs font-medium col-span-4">
              Name
            </label>
            <div className="flex gap-[10px] col-span-8" id="name">
              <Input
                type="text"
                placeholder="First Name"
                className="rounded-[7px] border-[1px] border-[#1E1E1E66]"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="rounded-[7px] border-[1px] border-[#1E1E1E66]"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="name" className="text-xs font-medium col-span-4">
              Username
            </label>
            <Input
              type="text"
              placeholder="Type here"
              className="rounded-[7px] border-[1px] border-[#1E1E1E66] col-span-8"
            />
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="name" className="text-xs font-medium col-span-4">
              Gender
            </label>
            <RadioGroup
              defaultValue="comfortable"
              className="flex items-center col-span-8"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Laki-Laki" id="laki-laki" />
                <label htmlFor="laki-laki">Laki-Laki</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Perempuan" id="perempuan" />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="email" className="text-xs font-medium col-span-4">
              Email
            </label>
            <Input
              type="email"
              placeholder="Type here"
              className="rounded-[7px] border-[1px] border-[#1E1E1E66] col-span-8"
            />
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="no-telp" className="text-xs font-medium col-span-4">
              No.Telp
            </label>
            <Input
              type="text"
              placeholder="Type here"
              className="rounded-[7px] border-[1px] border-[#1E1E1E66] col-span-8"
            />
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="address" className="text-xs font-medium col-span-4">
              Address
            </label>
            <Input
              type="text"
              placeholder="Type here"
              className="rounded-[7px] border-[1px] border-[#1E1E1E66] col-span-8"
            />
          </div>
        </form>
        <div className="w-full flex justify-end mt-7 gap-[10px] text-xs leading-6">
          <button
            className="py-1 px-2  rounded-[7px] border-[1px] border-[#7e7e7e]"
            onClick={() => navigate("")}
          >
            Cancle
          </button>
          <button
            className="py-1 px-2  rounded-[7px] border-[1px] border-black bg-[#404040] text-white "
            onClick={() => navigate("")}
          >
            Save Change
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditUser;
