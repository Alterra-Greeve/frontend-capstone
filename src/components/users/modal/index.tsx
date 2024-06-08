import { UsersProps } from "@/lib/redux/api/users";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DefaultProfile from "@/assets/images/default-user.png";

interface DetailUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: UsersProps | undefined;
}

const UserDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <h4 className="text-neutral-800 text-xl font-bold">{label}</h4>
    <p className="text-neutral-500 text-lg">{value}</p>
  </div>
);

const DialogBody = ({ data }: { data: UsersProps | undefined }) => (
  <section className="flex flex-col gap-12 mt-10">
    <div className="grid grid-cols-3 gap-6 items-center">
      <UserDetail label="Username" value={data?.username || "-"} />
      <UserDetail label="Email" value={data?.email || "-"} />
      <UserDetail label="Gender" value={data?.gender || "-"} />
    </div>
    <div className="grid grid-cols-3 gap-6">
      <UserDetail label="No.Telp" value={data?.phone || "-"} />
      <UserDetail label="Alamat" value={data?.address || "-"} />
      <UserDetail label="Akun Terbuat Tanggal" value={"-"} />
    </div>
  </section>
);

export default function DetailUserModal({ isOpen, onClose, data }: DetailUserModalProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-3xl bg-neutral-50 p-10 py-8 md:rounded-2xl">
        <DialogHeader className="items-center gap-5">
          <div className="w-24 h-24">
            <img
              src={data?.avatar_url || DefaultProfile}
              alt="profile-image"
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl leading-8 font-bold">
            {data?.name || "-"}
          </h1>
        </DialogHeader>
        <DialogBody data={data} />
        <DialogFooter>
          <div className="w-full flex justify-end mt-3">
            <Button onClick={onClose} className="w-60 py-6">
              Tutup
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}