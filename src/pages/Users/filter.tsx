import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import filterIcon from "@/assets/icons/Filter.svg";
import Button from "@/components/Button/Button";

const UsersFilter = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-slate-300 min-w-6">
        <img src={filterIcon} alt="more-icon" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto absolute left-6 -top-10 text-neutral-900 p-3 rounded-[8px]">
        <div className="grid gap-3 p-3 border-[0.5px] border-neutral-200">
          <DropdownMenuItem className="flex flex-col justify-center items-start gap-3 p-0">
            <label
              htmlFor=""
              className="text-base text-neutral-900 font-extrabold leading-5"
            >
              Nama
            </label>
            <input
              type="text"
              className="w-[204px] p-2 rounded-[7px] border-[0.5px] border-neutral-500"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-col justify-center items-start gap-3 p-0">
            <label
              htmlFor=""
              className="text-base text-neutral-900 font-extrabold leading-5"
            >
              Username
            </label>
            <input
              type="text"
              className="w-[204px] p-2 rounded-[7px] border-[0.5px] border-neutral-500"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-col justify-center items-start gap-3 p-0">
            <label
              htmlFor=""
              className="text-base text-neutral-900 font-extrabold leading-5"
            >
              Gender
            </label>
            <RadioGroup
              defaultValue="comfortable"
              className="flex flex-col items-start gap-3"
            >
              <div className="flex items-center space-x-2 w-[204px] p-3 bg-neutral-100 rounded-[7px]">
                <RadioGroupItem value="Laki-Laki" id="laki-laki" />
                <label htmlFor="" className="text-sm leading-5 font-normal">
                  Laki-Laki
                </label>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-neutral-100 w-[204px] rounded-[7px]">
                <RadioGroupItem value="Perempuan" id="laki-laki" />
                <label htmlFor="" className="text-sm leading-5 font-normal">
                  Perempuan
                </label>
              </div>
            </RadioGroup>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-col justify-center items-start gap-3 p-0">
            <label
              htmlFor=""
              className="text-base text-neutral-900 font-extrabold leading-5"
            >
              Membership
            </label>
            <RadioGroup
              defaultValue="comfortable"
              className="flex flex-col items-start gap-3"
            >
              <div className="flex items-center space-x-2 p-3 bg-neutral-100 w-[204px] rounded-[7px]">
                <RadioGroupItem value="ya" id="laki-laki" />
                <label htmlFor="" className="text-sm leading-5 font-normal">
                  Ya
                </label>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-neutral-100 w-[204px] rounded-[7px]">
                <RadioGroupItem value="Tidak" id="laki-laki" />
                <label htmlFor="" className="text-sm leading-5 font-normal">
                  Tidak
                </label>
              </div>
            </RadioGroup>
          </DropdownMenuItem>
        </div>
        <div className="mt-5">
          <Button children="Simpan" variant="primary" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsersFilter;
