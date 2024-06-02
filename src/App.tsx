import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/auth/login";
import ProtectedRoutes from "./pages/ProtectedRoutes";

export default function App() {
  return (
    <>
      <Navbar />

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
          <Route path="challenges" element={<Challenges />} />
          {/* <Route path="otherpath" element={<SomeComponent />} */}
        </Route>

        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}