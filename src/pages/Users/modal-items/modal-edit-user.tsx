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
import Button from "@/components/Button/Button";
import { useState } from "react";
import ModalDialog from "./modal-dialog";

const ModalEditUser = ({ isShow = false }: { isShow: any }) => {
  const [action, setAction] = useState("");
  const navigate = useNavigate();


  function handleEditUsers(){
    alert("data edited")
    navigate("")
  }

  if (action !== "") {
    if (action == "cancleEdit") {
      return (
        <ModalDialog
          headText="Perubahan belum disimpan!"
          bodyText="Anda telah mengubah beberapa informasi. Pastikan untuk menyimpan agar tidak kehilangan perubahan ini"
          isShow={true}
          fasleButton={
            <Button
              children="Keluar"
              icon=""
              onClick={() => navigate("")}
              variant="secondary"
            />
          }
          trueButton={
            <Button
              children="Tetap Mengedit"
              icon=""
              onClick={() => setAction("")}
              variant="primary"
            />
          }
        />
      );
    } else if (action == "edit") {
      return (
        <ModalDialog
          headText="Ingin menyimpan data ini?"
          bodyText="Perubahan dari data sebelumnya akan tersimpan"
          isShow={true}
          fasleButton={
            <Button
              children="Tidak"
              icon=""
              onClick={() => setAction("")}
              variant="secondary"
            />
          }
          trueButton={
            <Button
              children="Iya, Simpan"
              icon=""
              onClick={() => handleEditUsers()}
              variant="primary"
            />
          }
        />
      );
    }
  } else {
    return (
      <Dialog open={isShow}>
        <DialogContent className="w-auto max-w-full  flex flex-col gap-5">
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-5">
              <div className="rounded-full">
                <img src={profileAlt} alt="profile-img" />
              </div>
              <div className="flex flex-col gap-2 text-neutral-900">
                <h1 className="text-lg leading-5 font-bold">Fulan Bin Fulan</h1>
                <p className="text-base leading-5 font-normal">
                  loremipsum@gmail.com
                </p>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-[9px]" tabIndex={0}>
            <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
              <label htmlFor="name" className="text-sm leading-5 font-semibold">
                Name
              </label>
              <div className="flex gap-[10px] col-span-8">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
              <label
                htmlFor="userName"
                className="text-sm leading-5 font-semibold"
              >
                Username
              </label>
              <Input
                type="text"
                placeholder="Type here"
                className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
                id="userName"
              />
            </div>
            <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
              <label htmlFor="name" className="text-sm leading-5 font-semibold">
                Gender
              </label>
              <RadioGroup
                defaultValue="comfortable"
                className="flex items-center gap-5"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Laki-Laki" id="laki-laki" />
                  <label
                    htmlFor="laki-laki"
                    className="text-sm leading-5 font-normal"
                  >
                    Laki-Laki
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Perempuan" id="perempuan" />
                  <label
                    htmlFor="perempuan"
                    className="text-sm leading-5 font-normal"
                  >
                    Perempuan
                  </label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
              <label
                htmlFor="email"
                className="text-sm leading-5 font-semibold"
              >
                Email
              </label>
              <Input
                type="email"
                placeholder="Type here"
                className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
              />
            </div>
            <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
              <label
                htmlFor="no-telp"
                className="text-sm leading-5 font-semibold"
              >
                No.Telp
              </label>
              <Input
                type="text"
                placeholder="Type here"
                className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
              />
            </div>
            <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
              <label
                htmlFor="address"
                className="text-sm leading-5 font-semibold"
              >
                Address
              </label>
              <Input
                type="text"
                placeholder="Type here"
                className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
              />
            </div>
          </form>
          <div className="w-full flex justify-end my-3 gap-3 text-sm leading-6">
            <div className="flex justify-center items-center w-[120px]">
              <Button
                children="Cancel"
                variant="secondary"
                icon=""
                onClick={() => setAction("cancleEdit")}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Button
                children="Simpan"
                variant="primary"
                icon=""
                onClick={() => setAction("edit")}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
};

export default ModalEditUser;
