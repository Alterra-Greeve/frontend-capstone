import "./App.css";
// import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import Challenges from "./pages/Challenges/index"
import Dashboard from "./pages/Dashboard/index"
import Products from "./pages/Products/index"
import Users from "./pages/Users/index"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/challenges" element={<Challenges/>}/>
      </Routes>
      {/* <h1 className="text-[100px] bg-blue-700 rounded-lg text-white">
        test tailwind css
      </h1>
      <Button>test shadcn ui</Button> */}
    </>
  );
}

export default App;
