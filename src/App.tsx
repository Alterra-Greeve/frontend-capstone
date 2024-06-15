import { Routes, Route, Navigate } from "react-router-dom";
import DataImpact from "@/pages/DataImpact";
import ProtectedRoutes from "@/pages/ProtectedRoutes";
import LoginPage from "@/pages/auth/login";
import AddProducts from "@/pages/Products/AddProducts";
import EditProducts from "@/pages/Products/EditProducts";
import DataImpactOrder from "@/pages/DataImpactOrder";
import DataImpactChallenge from "@/pages/DataImpactChallenge";
import UsersPage from "@/pages/Users/index";
import ProductsPage from "@/pages/Products";
import ChallengesPage from "@/pages/Challenges";
import DashboardPage from "@/pages/Dashboard";
import EditChallengePage from "@/pages/Challenges/edit";
import AddChallengePage from "@/pages/Challenges/add";
import ForumPage from "@/pages/forums";

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
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />

        <Route path="products">
          <Route index element={<ProductsPage />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="edit-products/:id" element={<EditProducts />} />
        </Route>

        <Route path="challenges">
          <Route index element={<ChallengesPage />} />
          <Route path="edit/:id" element={<EditChallengePage />} />
          <Route path="add" element={<AddChallengePage />} />
        </Route>

        <Route path="data-impact">
          <Route index element={<DataImpact />} />
          <Route path="order" element={<DataImpactOrder />} />
          <Route path="challenge" element={<DataImpactChallenge />} />
        </Route>

        <Route path="forum-discussion">
          <Route index element={<ForumPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
}
