import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

interface AiChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiResponse = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-2 max-w-lg border border-neutral-200 rounded-xl p-3">
      <h5 className="text-primary-500 font-black">Greeve AI</h5>
      {children}
    </section>
  )
}

const UserAsk = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-end">
      <section className="flex flex-col gap-2 max-w-lg border border-neutral-200 rounded-xl p-3">
        <h5 className="text-primary-500 font-black">Kamu</h5>
        {children}
      </section>
    </div>
  )
}

export default function AiChallengeModal({ isOpen, onClose }: AiChallengeModalProps) {
  const submitRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="min-h-[92vh] flex flex-col items-center md:rounded-2xl max-w-4xl">
        <DialogHeader className="gap-1 w-full">
          <DialogTitle className="text-2xl font-bold text-neutral-900">
            Tanya AI
          </DialogTitle>
          <DialogDescription className="text-neutral-500 text-md">
            Tanyakan AI untuk memberikan saran tantangan yang ingin kamu buat.
          </DialogDescription>
        </DialogHeader>

        <section className="flex gap-3 flex-col flex-grow w-full pt-5 overflow-y-auto max-h-[70vh]">
          <AiResponse>
            <p>
              Halo, saya Greeve AI. Adakah yang bisa dibantu?
            </p>
          </AiResponse>
          <UserAsk>
            <p>
              Apa tantangan yang cocok untuk anak-anak usia 5-10 tahun?
            </p>
          </UserAsk>
        </section>

        <DialogFooter className="w-full">
          <div className="flex flex-col w-full gap-5">
            <Input placeholder="Tulis pertanyaanmu..." />
            <div className="flex items-center gap-5 w-full">
              <Button className="w-full" onClick={() => submitRef.current?.click()}>
                Tanya
              </Button>
              <Button variant="outline_primary" onClick={onClose}>
                Keluar
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >

  )
}