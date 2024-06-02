import "./App.css";
// import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges/index";
import Dashboard from "./pages/Dashboard/index";
import Products from "./pages/Products/index";
import Users from "./pages/Users/index";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DataImpact from "./pages/DataImpact";

function App() {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/data-impact" element={<DataImpact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
