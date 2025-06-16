import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import HexagonBackground from "./components/HexagonBackground"
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const Layout = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMoveGlobal = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY + window.scrollY;
  
      setMousePosition({ x: mouseX, y: mouseY });
    };
  
    window.addEventListener("mousemove", handleMouseMoveGlobal);
    return () => window.removeEventListener("mousemove", handleMouseMoveGlobal);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <Toaster />
        <HexagonBackground />
        <Header />
        <div className="absolute inset-0 z-1 pointer-events-none" style={{
            transform: `translate(${mousePosition.x - 140}px, ${mousePosition.y - 140}px)`,
        }}>
            <div className=" w-70 h-70 bg-cyan-400/20 rounded-full blur-3xl opacity-40 transition-transform duration-100 animate-pulse"></div>
        </div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout