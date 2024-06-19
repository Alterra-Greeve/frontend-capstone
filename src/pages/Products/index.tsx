import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { HeaderProducts } from "@/components/products/header";
import Loading from "@/components/loading";
import TableProducts from "@/components/products/table";
import Paging from "@/components/pagination";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getAllDataImpact } from "@/lib/redux/api/impact";
import { getAllProducts } from "@/lib/redux/api/products";
import FilterItemsProduct from "@/components/products/filter/items";
import NoData from "@/components/NoData";
import { Toaster } from "@/components/ui/toaster";

interface DataShowProps {
  start: number;
  end: number;
}

export default function ProductsPage() {
  const dispatch = useAppDispatch();

  const { isLoading: loadingImpacts } = useAppSelector((state: RootState) => state.impact);
  const {
    data: products,
    isLoading: loadingProducts
  } = useAppSelector((state: RootState) => state.products);

  const [dataShow, setDataShow] = useState<DataShowProps>({
    start: 0,
    end: 10
  });

  useEffect(() => {
    (async () => {
      await dispatch(getAllDataImpact());
      await dispatch(getAllProducts());
    })();

    // eslint-disable-next-line
  }, [])

  if (loadingProducts || loadingImpacts) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <section className="p-6">
        <HeaderProducts />
        <FilterItemsProduct />

        {products && products.length === 0
          ? <NoData />
          : (
            <>
              <TableProducts dataShow={dataShow} />
              <Paging
                dataLength={products.length}
                amouthDataDisplayed={10}
                className="my-4"
                setDataShow={(event: { start: number; end: number }) => {
                  setDataShow({ start: event.start, end: event.end });
                }}
              />
            </>
          )
        }
      </section>
      <Toaster />
    </AdminLayout>
  )
}
