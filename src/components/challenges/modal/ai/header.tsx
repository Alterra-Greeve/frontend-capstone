import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function HeaderModalAI() {
  return (
    <DialogHeader className="gap-1 w-full">
      <DialogTitle className="text-2xl font-black text-primary-500">
        Greeve AI
      </DialogTitle>
      <DialogDescription className="text-neutral-500 text-md">
        Tanyakan AI untuk memberikan saran tantangan yang ingin kamu buat.
      </DialogDescription>
    </DialogHeader>
  )
}