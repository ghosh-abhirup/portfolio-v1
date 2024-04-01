import React from "react";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-backgroundColor text-textColor font-nunito flex flex-col items-center">
      <Navbar />
      <div className="w-full flex-1 max-w-[1800px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
