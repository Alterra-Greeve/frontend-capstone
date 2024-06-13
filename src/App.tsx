import { Routes, Route, Navigate } from "react-router-dom";
import DataImpact from "./pages/DataImpact";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import LoginPage from "./pages/auth/login";
import AddProducts from "./pages/Products/AddProducts";
import EditProducts from "./pages/Products/EditProducts";
import DataImpactOrder from "./pages/DataImpactOrder";
import DataImpactChallenge from "./pages/DataImpactChallenge";
import UsersPage from "./pages/Users/index";
import ProductsPage from "./pages/Products";
import ChallengesPage from "./pages/Challenges";
import DashboardPage from "./pages/Dashboard";
import ForumPage from "./pages/forums";
import ForumDetail from "./pages/forums/forum-detail";

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
        {/* Forum */}
        <Route path="forum-discussion" element={<ForumPage />} />
        <Route path="forum-discussion/:forum_id" element={<ForumDetail />} />
        {/* Forum */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/add-products" element={<AddProducts />} />
        <Route path="products/edit-products/:id" element={<EditProducts />} />
        <Route path="challenges" element={<ChallengesPage />} />
        <Route path="data-impact" element={<DataImpact />} />
        <Route path="data-impact/order" element={<DataImpactOrder />} />
        <Route path="data-impact/challenge" element={<DataImpactChallenge />} />
      </Route>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
}
