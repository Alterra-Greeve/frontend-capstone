import AdminLayout from "@/layouts/AdminLayout";
import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";

const DataImpactOrder = () => {
  const [data, setData] = useState({})
  async function fetchDataImpact() {
    const response = await GreeveApi.get(`admin/impact`)
    console.log(response.data)
  }
  async function fetchDataChallenges(){
    const response = await GreeveApi.get(`admin/challenges`)
    console.log(response.data)
  }
  async function fetchDataProducts(){
    const response = await GreeveApi.get(`products`)
    console.log(response.data)
  }
  async function fetchDataUsers(){
    const response = await GreeveApi.get(`admin/users`)
    console.log(response.data)
  }
  useEffect(()=>{
    fetchDataImpact()
    fetchDataChallenges()
    fetchDataProducts()
    fetchDataUsers()
  },[])
  
  return (
    <AdminLayout>
      tes
    </AdminLayout>
  )
};

export default DataImpactOrder;
