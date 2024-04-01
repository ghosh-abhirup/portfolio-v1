import React, { useContext } from "react";
import "./Navbar.css";
import { AppContext } from "../../../context/AppContext";
import Navlink from "./Navlink";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme } = useContext(AppContext);
  const navigate = useNavigate();

  const routeToPage = (p) => {
    navigate(`/${p}`);
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto flex justify-between items-center px-6 pb-4 pt-8">
      <svg
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logoSvg"
        onClick={() => routeToPage("")}
      >
        <rect
          x="0.5"
          y="16.5"
          width="20"
          height="5"
          fill={theme == "light" ? "black" : "white"}
        />
        <rect
          x="1.5"
          y="1.5"
          width="18"
          height="12"
          stroke={theme == "light" ? "black" : "white"}
          strokeWidth="2"
        />
      </svg>

      <div className="flex items-center gap-[30px]">
        <Navlink page="about" title={"ABOUT"} />
        <Navlink page="works" title={"WORKS"} />
        <Navlink page="experience" title={"EXPERIENCE"} />
        <Navlink page="contact" title={"CONTACT"} />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
