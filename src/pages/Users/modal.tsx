import { useLocation } from "react-router-dom";
import ModalUserDetail from "./modal-items/modal-user-detail";
import ModalEditUser from "./modal-items/modal-edit-user";
import ModalDialog from "./modal-items/modal-dialog";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user_id = searchParams.get("user_id");
  const action = searchParams.get("action");

  const navigate = useNavigate();

  if (user_id && action == "delete") {
    return (
      <ModalDialog
        headText="Yakin ingin menghapus data ini?"
        bodyText="Penghapusan bersifat permanen dan tidak bisa dibatalkan"
        isShow={user_id && action == "delete" ? true : false}
        fasleButton={
          <Button
            children="Tidak"
            variant="secondary"
            onClick={() => navigate("")}
          />
        }
        trueButton={
          <Button
            children="Ya , Hapus"
            variant="primary"
            onClick={() => navigate("")}
          />
        }
      />
    );
  } else if (user_id && action == "edit") {
    return (
      <ModalEditUser isShow={user_id && action == "edit" ? true : false} />
    );
  } else {
    return <ModalUserDetail isShow={user_id ? true : false} />;
  }
};

export default Modal;
