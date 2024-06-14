import { useNavigate } from "react-router-dom";

type modal = {
    className?: string;
    children: React.ReactNode;
}

export default function ModalAlerts({className, children}:modal) {
    const navigate = useNavigate();
    function handleClose(e:any){
        if(e.target.id === 'wrapper'){
            navigate('')
        }
    }
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0
        flex justify-center items-center z-10"
        id="wrapper"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.50)' }}
        onClick={(e) => handleClose(e)}>
            <div className={className}>   
                {children}
            </div>
        </div>
    )
};
