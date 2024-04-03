import React from "react";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <div className="w-full h-screen bg-backgroundColor text-textColor font-nunito flex flex-col items-center overflow-hidden">
        <Navbar />
        <div className="w-full flex-1 max-w-[1800px] mx-auto">{children}</div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
