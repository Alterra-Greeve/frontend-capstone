import AdminLayout from "@/layouts/AdminLayout";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="bg-[#ffff]" style={{ minHeight: "calc(100vh - 110px)" }}>
        <div className="bg-[#B1B1B1] m-[10px] flex flex-col p-[18px]" style={{ minHeight: "calc(100vh - 110px)" }}>
          <section className="flex flex-row justify-between gap-[16px] h-[280px] ">
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[16px] justify-between">
                <div className="bg-[#D9D9D9] w-[160px] h-[135px] p-[12px]">
                  <h6 className="font-bold text-[16px] mb-[20px]">Total Produk</h6>
                  <h3 className="font-bold text-[28px]">200</h3>
                  <p className="text-[16px]">items</p>
                </div>
                <div className="bg-[#D9D9D9] w-[319px] h-[135px] p-[12px]">
                  <div className="flex justify-between">
                    <h6 className="font-bold mb-[20px]">Produk Terbaru</h6>
                    <p>Januari</p>
                  </div>
                  <div className="flex gap-[12px]">
                    <h3 className="font-bold">20</h3>
                    <p>items</p>
                  </div>
                  <div>
                    <p>2% dari Bulan Lalu</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#D9D9D9] w-[500px] h-[135px] p-[12px]">
                <h6 className="font-bold mb-[7px]">Pengguna</h6>
                <div className="flex justify-between">
                  <h3 className="font-bold">245</h3>
                  <div className="w-[200px] h-[56px] bg-[#C5C5C5] flex items-center gap-[12px] px-[8px]">
                    <div className="bg-[#8B8B8B] w-[28px] h-[28px]"></div>
                    <div className="flex flex-col">
                      <p>45</p>
                      <p className="text-[12px]">Pengguna Membership</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p>2% dari Bulan Lalu</p>
                </div>
              </div>
            </div>
            <div className="bg-[#D9D9D9] w-full"></div>
          </section>
          <section className="bg-[#D9D9D9] h-[462px] w-full mt-[16px]"></section>
        </div>
      </div>
    </AdminLayout>
  )
}
