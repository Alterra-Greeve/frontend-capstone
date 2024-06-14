import { useLocation } from "react-router-dom";
import ModalDeleteProducts from "./modal-products/ModalDeleteProducts";
import ModalProductsDetail from "./modal-products/ModalProductsDetail";
// import { useNavigate } from "react-router-dom";


export default function Modal() {
    // const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const product_id = searchParams.get("product_id");
    const action = searchParams.get("action");
    if(product_id !== null && action === 'delete'){
        return <ModalDeleteProducts product_id={product_id} action={action}/>
    }else if(product_id !== null){
        return <ModalProductsDetail product_id={product_id}/>
    }
};
