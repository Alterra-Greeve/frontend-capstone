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
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import ModalDialog from "./modal-dialog";
import { Formik, Field, Form } from "formik";
import useFetch from "@/lib/hooks/useFetch";
import newUseFetch from "@/lib/hooks/newUseFetch";

interface dataUsers {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  address: string;
  gender: string;
  phone: string;
  coin: string;
  exp: string;
  avatar_url: string;
}

const ModalEditUser = ({ isShow = false }: { isShow: any }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user_id = searchParams.get("user_id");
  const [userEdit, setUserEdit] = useState<dataUsers>();

  const { data, loading, error, fetchData } = newUseFetch<{ data: any }>();

  useEffect(() => {
    fetchData(`admin/users/${user_id}`, {
      method: "get",
    });
  }, [user_id]);
  useEffect(() => {
    setUserEdit(data?.data);
  }, [data]);

  console.log(userEdit);

  const [action, setAction] = useState("");
  const navigate = useNavigate();

  function handleEditUsers() {
    alert("data edited");
    navigate("");
  }

  return (
    <Dialog open={isShow}>
      {action == "cancleEdit" ? (
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
      ) : action == "edit" ? (
        <ModalDialog
          headText="Ingin menyimpan data ini?"
          bodyText="Perubahan dari data sebelumnya akan tersimpan"
          isShow={true}
          fasleButton={
            <Button
              children="Tidak"
              icon=""
              onClick={() => navigate("")}
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
      ) : (
        <DialogContent className="w-auto max-w-full  flex flex-col gap-5 sm:rounded-[20px]">
          {loading ? (
            <section>Loading</section>
          ) : (
            <>
              <div className="grid grid-cols-1">
                <div className="flex flex-col gap-5">
                  <div className="rounded-full w-[80px]">
                    <img
                      src={userEdit?.avatar_url || profileAlt}
                      alt="profile-img"
                      className="w-full rounded-full h-[80px] "
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-neutral-900">
                    <h1 className="text-lg leading-5 font-bold">
                      {userEdit?.name}
                    </h1>
                    <p className="text-base leading-5 font-normal">
                      {userEdit?.email}
                    </p>
                  </div>
                </div>
              </div>
              <Formik
                initialValues={{
                  firstName: userEdit?.name || "",
                  lastName: "",
                  userName: userEdit?.username || "",
                  gender: userEdit?.gender || "",
                  email: userEdit?.email || "",
                }}
                onSubmit={async (values) => {
                  console.log(values);
                }}
              >
                {() => (
                  <>
                    <Form className="flex flex-col gap-[9px]" tabIndex={0}>
                      <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
                        <label
                          htmlFor="name"
                          className="text-sm leading-5 font-semibold"
                        >
                          Name
                        </label>
                        <div className="flex gap-[10px]">
                          <Field
                            name="firstName"
                            placeholder="First Name"
                            className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2 w-full"
                          />
                          <Field
                            name="lastName"
                            placeholder="Last Name"
                            className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2 w-full"
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
                        <Field
                          placeholder="Type here"
                          className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
                          name="userName"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
                        <label
                          htmlFor="name"
                          className="text-sm leading-5 font-semibold"
                        >
                          Gender
                        </label>
                        <div
                          defaultValue="comfortable"
                          className="flex items-center gap-5"
                        >
                          <div className="flex items-center space-x-2">
                            <Field
                              type="radio"
                              value="Laki-Laki"
                              name="gender"
                            />
                            <label
                              htmlFor="laki-laki"
                              className="text-sm leading-5 font-normal"
                            >
                              Laki-Laki
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Field
                              type="radio"
                              value="Perempuan"
                              name="gender"
                            />
                            <label
                              htmlFor="perempuan"
                              className="text-sm leading-5 font-normal"
                            >
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-1 items-center min-w-[500px]">
                        <label
                          htmlFor="email"
                          className="text-sm leading-5 font-semibold"
                        >
                          Email
                        </label>
                        <Field
                          name="email"
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
                        <Field
                          name="phone"
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
                        <Field
                          name="address"
                          placeholder="Type here"
                          className="rounded-[7px] border-[0.5px] border-[#1E1E1E66] text-sm leading-5 p-2"
                        />
                      </div>

                      <button
                        type="submit"
                        id="submitEditUsers"
                        className="hidden"
                      >
                        test
                      </button>
                    </Form>
                    <div className="w-full flex justify-end my-3 gap-3 text-sm leading-6">
                      <div className="flex justify-center items-center w-[120px]">
                        <Button
                          children="Cancel"
                          variant="secondary"
                          icon=""
                          onClick={() => {
                            document.getElementById("submitEditUsers")?.click();
                            setAction("cancleEdit");
                          }}
                        />
                      </div>
                      <div className="flex justify-center items-center w-[120px]">
                        <Button
                          children="Simpan"
                          variant="primary"
                          icon=""
                          onClick={() => {
                            document.getElementById("submitEditUsers")?.click();
                            setAction("edit");
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            </>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ModalEditUser;
