import "./App.css";
// import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges/index";
import Dashboard from "./pages/Dashboard/index";
import Products from "./pages/Products/index";
import Users from "./pages/Users/index";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import useFetch from "./lib/useFetch";

function App() {
  let body = JSON.stringify({
    email: "admin@greeve.store",
    password: "admin",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  };

  const { data, error, loading } = useFetch("/admin/login", config);
  console.log(data);

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
        </Routes>
      </div>
    </div>

  );
}

export default App;
