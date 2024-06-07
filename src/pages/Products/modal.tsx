// import { useLocation } from "react-router-dom";
import ModalProductsDetail from "./modal-products/ModalProductsDetail";
// import { useNavigate } from "react-router-dom";
// import { Dialog } from "@/components/ui/dialog";


export default function Modal() {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const navigate = useNavigate()
    // const product_id = searchParams.get("product_id");
    // const action = searchParams.get("action");
    // console.log(product_id)
    return (
        <>
            <ModalProductsDetail/>
        </>
    )
};
