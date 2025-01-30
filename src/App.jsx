import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter basename="/newPortfolio">
      <AppContent toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    </BrowserRouter>
  );
}

function AppContent({ toggleSidebar, sidebarOpen }) {
  const location = useLocation();
  const isParticlesRoute = location.pathname === "/";

  return (
    <>
      {!isParticlesRoute && !sidebarOpen && (
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      )}
      {!isParticlesRoute && sidebarOpen && (
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div>Página não encontrada...</div>} />
      </Routes>
    </>
  );
}

AppContent.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};

export default App;
