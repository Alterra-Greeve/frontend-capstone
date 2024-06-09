import AdminLayout from "@/layouts/AdminLayout";
import { useParams } from "react-router-dom";

export default function EditChallengePage() {
  const { id } = useParams();

  return (
    <AdminLayout>
      <h1>Edit Challenge Page</h1>
      <p>Challenge ID: {id}</p>
    </AdminLayout>
  )
}