import "./App.css";
// import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges/index";
import Dashboard from "./pages/Dashboard/index";
import Products from "./pages/Products/index";
import Users from "./pages/Users/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Users />} />
        <Route path="/about us" element={<Products />} />
        <Route path="/feature" element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
