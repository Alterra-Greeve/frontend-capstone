/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminLayout from "@/layouts/AdminLayout";
import DataStatistic from "./DataStatistic";
import NewProductTable from "./NewProductTable";
import Chart from "./Chart";
import useFetch from "@/lib/hooks/useFetch";
import Loading from "@/components/loading";

export default function DashboardPage() {
  const { loading, error, data }: any = useFetch("dashboard", {
    method: "get",
  });

  if (loading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    );
  }
  if (error) {
    return <AdminLayout>{error.message}</AdminLayout>;
  }

  return (
    <AdminLayout>
      <div
        className="bg-[#F5F5F5] overflow-auto"
        style={{ height: "calc(100vh - 110px)" }}
      >
        <div
          className="bg-[#F5F5F5] m-[10px] flex flex-col p-[18px]"
          style={{ minHeight: "calc(100vh - 110px)" }}
        >
          <section className="flex flex-row justify-between gap-[16px] h-auto ">
            <DataStatistic data={data.data} />
            <NewProductTable data={data.data.new_products} />
          </section>
          <Chart dataMonthlyImpact={data.data.monthly_impact} />
        </div>
      </div>
    </AdminLayout>
  );
}
