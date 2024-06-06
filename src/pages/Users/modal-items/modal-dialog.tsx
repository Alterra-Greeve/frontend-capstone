import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import YesornoIcon from "./Yes_or_no_icon.svg";

interface modalDialog {
  isShow: boolean;
  headText: string;
  bodyText: string;
  trueButton: any;
  fasleButton: any;
}

const ModalDialog = ({
  isShow = false,
  headText,
  bodyText,
  trueButton,
  fasleButton,
}: modalDialog) => {
  return (
      <DialogContent className="w-[500px] max-w-full p-8 sm:rounded-[20px] grid  justify-center">
        <DialogHeader className="flex flex-col items-center justify-center w-full gap-8">
          <div className="flex justify-center items-center">
            <YesornoIcon/>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center text-neutral-900">
            <p className="text-2xl font-bold max-w-auto text-center">
              {headText}
            </p>
            <p className="text-lg leading-5 font-normal text-center w-auto tracking-tighter">
              {bodyText}
            </p>
          </div>
        </DialogHeader>
        <div className="w-full flex justify-end mt-14 gap-5 text-sm leading-6 font-medium">
          {fasleButton}
          {trueButton}
        </div>
      </DialogContent>
    // <Dialog open={isShow}>
    // </Dialog>
  );
};

export default ModalDialog;
