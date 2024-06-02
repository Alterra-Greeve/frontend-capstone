import download from "@/assets/icons/Export.svg"
import plus from "@/assets/icons/plus.svg"
import Button from "@/components/Button/Button"
export default function AddProducts() {
    return (
        <div className="flex gap-[8px]">
            <Button variant="secondary" icon={download}>
                Export
            </Button>
            <Button variant="primary" icon={plus}>
                Tambahkan Produk Baru
            </Button>
        </div>
    )
};
