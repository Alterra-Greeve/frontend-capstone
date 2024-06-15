import { RootState, useAppSelector } from "@/lib/redux";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import PoinXp from "@/assets/icons/poin-xp.svg";
import Coin from "@/assets/icons/Coin.svg";

interface DetailChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export default function DetailChallengeModal({ isOpen, onClose, id }: DetailChallengeModalProps) {
  const { data } = useAppSelector((state: RootState) => state.challenges);
  const challenge = data.find((item) => item.id === id);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-neutral-50 max-w-screen-sm flex flex-col p-3">
        <DialogHeader className="p-0">
          <img
            src={challenge?.image_url}
            alt={challenge?.title}
            className="w-full h-80 object-cover rounded-xl"
          />
        </DialogHeader>

        <div className="w-full flex flex-col gap-5">
          <div className="grid grid-cols-8 gap-3 items-center">
            <div className="col-span-4 bg-success-100 text-success-500 w-full text-center py-5 rounded-xl">
              <span className="text-2xl font-semibold">{challenge?.difficulty}</span>
            </div>
            <div className="col-span-2 flex justify-center items-center gap-3 bg-danger-50 text-danger-500 w-full py-5 rounded-xl">
              <PoinXp />
              <span className="text-2xl font-semibold">+{challenge?.exp}</span>
            </div>
            <div className="col-span-2 flex justify-center items-center gap-3 bg-warning-50 text-warning-500 w-full py-5 rounded-xl">
              <Coin />
              <span className="text-2xl font-semibold">+{challenge?.coin}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-neutral-900">
              {challenge?.title}
            </h1>
            <h5 className="text-lg font-bold text-neutral-900">
              {challenge?.date_start} - {challenge?.date_end}
            </h5>
          </div>

          <p className="text-neutral-500">
            {challenge?.description}
          </p>

          <div className="flex items-center gap-5">
            <h1 className="text-xl text-neutral-900">Membantu</h1>
            <div className="flex gap-3 items-center">
              {challenge?.categories.map((category, index) => (
                <img
                  key={index}
                  src={category.impact_category.icon_url}
                />
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-end">
          <Button className="px-12 py-6" onClick={onClose}>
            Tutup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}