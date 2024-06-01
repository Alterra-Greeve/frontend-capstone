import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/auth/login";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="challenges" element={<Challenges />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}