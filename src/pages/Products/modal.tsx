import { useLocation } from "react-router-dom";
import ModalProductsDetail from "./modal-products/ModalProductsDetail";

export default function Modal() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const products_id = searchParams.get("products_id");
    console.log(products_id)
    return (
        <ModalProductsDetail isShow={products_id ? true : false}/>
    )
};
