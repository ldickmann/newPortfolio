import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ParticlesComponent from "./components/Particles/particlesComponent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ParticlesComponent />
      {!sidebarOpen && (
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      )}
      {sidebarOpen && (
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<div>Página não encontrada...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
