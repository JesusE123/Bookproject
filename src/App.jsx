import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
