import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges/index";
import Dashboard from "./pages/Dashboard/index";
import Products from "./pages/Products/index";
import Users from "./pages/Users/index";
import DataImpact from "./pages/DataImpact";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import LoginPage from "./pages/auth/login";
import AddProducts from "./pages/Products/AddProducts";
import EditProducts from "./pages/Products/EditProducts";

export default function App() {
  return (
    <Routes>
      {/**
       * Semua route yang ada di app nanti di protect 
       * dengan component ProtectedRoutes
       * jadi kalau ada penambahan route baru, yang memerlukan authorization
       * pastiin tambahin di dalam prefix /dashboard
      */}
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="products/add-products" element={<AddProducts />} />
        <Route path="products/edit-products/:id" element={<EditProducts />} />
        <Route path="challenges" element={<Challenges />} />
        <Route path="data-impact" element={<DataImpact />} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  )
}