import AdminLayout from "@/layouts/AdminLayout";
import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";

const DataImpactChallenge = () => {
  const [data, setData] = useState<any>()
  async function fetchDataImpactChallenge() {
    const response = await GreeveApi.get(`/order/challenge`)
    setData(response.data.data)
  }
  useEffect(() => {
    fetchDataImpactChallenge()
  },[])
  console.log(data)
  return (
    <AdminLayout>
      Data Impact Challenge
    </AdminLayout>
  );
};

export default DataImpactChallenge;
