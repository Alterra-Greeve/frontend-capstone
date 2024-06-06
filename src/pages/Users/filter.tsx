import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FilterIcon from "@/assets/icons/Filter.svg";
import Button from "@/components/Button/Button";
import { useState } from "react";
import { Formik, Field, Form } from "formik";

const UsersFilter = ({
  setFilter,
  filterValue,
}: {
  setFilter: any;
  filterValue: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        className="hover:bg-slate-300 min-w-6"
        onClick={() => setIsOpen(true)}
      >
        <FilterIcon />
      </PopoverTrigger>
      <PopoverContent className="w-auto absolute left-6 -top-10 text-neutral-900 p-3 rounded-[8px]">
        <Formik
          initialValues={{
            name: filterValue.name || "",
            username: filterValue.username || "",
            gender: filterValue.gender || "",
            membership: filterValue.membership || "",
          }}
          onSubmit={async (values) => {
            setFilter(values);
          }}
        >
          {() => (
            <>
              <Form
                className="grid gap-3 p-3 border-[0.5px] border-neutral-200"
                tabIndex={0}
              >
                <div className="flex flex-col justify-center items-start gap-3 p-0">
                  <label
                    htmlFor=""
                    className="text-base text-neutral-900 font-extrabold leading-5"
                  >
                    Nama
                  </label>
                  <Field
                    name="name"
                    id="name"
                    className="w-[204px] p-2 rounded-[7px] border-[0.5px] border-neutral-500 focus:border-neutral-800 outline-none"
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-3 p-0">
                  <label
                    htmlFor=""
                    className="text-base text-neutral-900 font-extrabold leading-5"
                  >
                    Username
                  </label>
                  <Field
                    name="username"
                    id="username"
                    className="w-[204px] p-2 rounded-[7px] border-[0.5px] border-neutral-500 focus:border-neutral-800 outline-none"
                  />
                </div>

                <div className="flex flex-col justify-center items-start gap-3 p-0">
                  <label
                    htmlFor=""
                    className="text-base text-neutral-900 font-extrabold leading-5"
                  >
                    Gender
                  </label>
                  <div
                    defaultValue="comfortable"
                    className="flex flex-col items-start gap-3"
                  >
                    <div className="flex items-center space-x-2 w-[204px] p-3 bg-neutral-100 rounded-[7px]">
                      <Field
                        type="checkbox"
                        name="gender"
                        value="laki-laki"
                        className="bg-primary-600"
                      />
                      <label
                        htmlFor=""
                        className="text-sm leading-5 font-normal"
                      >
                        Laki-Laki
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-neutral-100 w-[204px] rounded-[7px]">
                      <Field type="checkbox" name="gender" value="perempuan" />
                      <label
                        htmlFor=""
                        className="text-sm leading-5 font-normal"
                      >
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-3 p-0">
                  <label
                    htmlFor=""
                    className="text-base text-neutral-900 font-extrabold leading-5"
                  >
                    Membership
                  </label>
                  <div
                    defaultValue="comfortable"
                    className="flex flex-col items-start gap-3"
                  >
                    <div className="flex items-center space-x-2 w-[204px] p-3 bg-neutral-100 rounded-[7px]">
                      <Field type="checkbox" name="membership" value="ya" />
                      <label
                        htmlFor=""
                        className="text-sm leading-5 font-normal"
                      >
                        Ya
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-neutral-100 w-[204px] rounded-[7px]">
                      <Field type="checkbox" name="membership" value="tidak" />
                      <label
                        htmlFor=""
                        className="text-sm leading-5 font-normal"
                      >
                        Tidak
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submitFilter"
                  className="hidden"
                ></button>
              </Form>
              <div className="mt-5">
                <Button
                  children="Simpan"
                  variant="primary"
                  onClick={() => {
                    document.getElementById("submitFilter")?.click();
                    setIsOpen(false);
                  }}
                />
              </div>
            </>
          )}
        </Formik>
      </PopoverContent>
    </Popover>
  );
};

export default UsersFilter;
