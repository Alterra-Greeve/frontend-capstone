import { useLocation } from "react-router-dom";
import ModalUserDetail from "./modal-items/modal-user-detail";
import ModalDeleteUser from "./modal-items/modal-delete-user";
import ModalEditUser from "./modal-items/modal-edit-user";

const Modal = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user_id = searchParams.get("user_id");
  const action = searchParams.get("action");
  
  if (user_id && action == "delete") {
    return (
      <ModalDeleteUser isShow={user_id && action == "delete" ? true : false} />
    );
  } else if (user_id && action == "edit") {
    return (
      <ModalEditUser isShow={user_id && action == "edit" ? true : false}/>
    )
  } 
  else {
    return <ModalUserDetail isShow={user_id ? true : false} />;
  }
};

export default Modal;
