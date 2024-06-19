import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import Coin from "@/assets/icons/Coin.svg";
import { RootState, useAppSelector } from "@/lib/redux";

interface DetailModalProductProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailModalProduct({ isOpen, onClose, id }: DetailModalProductProps) {
  const { data: impacts } = useAppSelector((state: RootState) => state.impact);
  const { data: products } = useAppSelector((state: RootState) => state.products);

  const product = products.find((product) => product.product_id === id);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-neutral-50 max-w-screen-sm flex flex-col p-3 rounded-xl">
        <DialogHeader className="p-0">
          <img
            src={product?.image_url[0]}
            alt={product?.name}
            className="w-full h-80 object-cover rounded-xl"
          />
        </DialogHeader>

        <div className="w-full flex flex-col gap-5">
          <div className="flex justify-between gap-2">
            {product?.image_url.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-xl"
              />
            ))}
            {product?.image_url && product.image_url?.length < 5 &&
              Array.from({ length: 5 - product.image_url.length }).map((_, index) => (
                <div key={index} className="w-20 h-20 bg-neutral-100 rounded-xl" />
              ))}
            <div className="col-span-2 w-fit flex justify-center items-center gap-3 bg-warning-50 text-warning-500 px-12 py-5 rounded-xl">
              <Coin />
              <span className="text-2xl font-semibold">+{product?.coin}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-neutral-900 text-2xl">{product?.name}</h1>
              <h5 className="text-lg font-bold">
                {Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR'
                }).format(product?.price as number)}
              </h5>
            </div>
            <p className="text-lg">{product?.stock} Stok</p>
          </div>

          <p className="text-neutral-500">
            {product?.description}
          </p>

          <div className="flex items-center gap-5">
            <h1 className="text-xl text-neutral-900 font-medium">Membantu</h1>
            <div className="flex gap-3 items-center">
              {product?.category.map((category) => (
                impacts.map((impact) => (
                  impact.id === category &&
                  <img key={impact.id} src={impact.icon_url} alt={impact.name} />
                ))
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-end">
          <Button className="px-12 py-6" onClick={onClose}>
            Tutup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}