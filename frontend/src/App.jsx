import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Skills from "./pages/Skills.jsx";
import Workshops from "./pages/Workshops.jsx";
import GetStarted from "./pages/GetStarted.jsx"; // optional, can reuse Skills

export default function App() {
  return (
    <div className="min-h-screen font-display text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </div>
  );
}
