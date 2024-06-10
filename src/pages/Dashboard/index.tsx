import AdminLayout from "@/layouts/AdminLayout";
import DataStatistic from "./DataStatistic";
import NewProductTable from "./NewProductTable";
import Chart from "./Chart";

export default function DashboardPage() {
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
            <DataStatistic />
            <NewProductTable />
          </section>
          <Chart />
        </div>
      </div>
    </AdminLayout>
  );
}
