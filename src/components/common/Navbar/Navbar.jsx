import React, { useContext } from "react";
import "./Navbar.css";
import { AppContext } from "../../../context/AppContext";
import Navlink from "./Navlink";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme } = useContext(AppContext);
  const navigate = useNavigate();

  const routeToPage = (p) => {
    navigate(`/${p}`);
  };

  return (
    <motion.div
      initial={{ y: "-200px" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: "0.2s",
        damping: 30,
        stiffness: 70,
      }}
      className="w-full max-w-[1800px] mx-auto flex justify-between items-center px-6 pb-4 pt-8"
    >
      {/* <svg
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
      </svg> */}

      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        className="logoSvg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => routeToPage("")}
      >
        <rect
          x="16"
          y="20"
          width="20"
          height="5"
          transform="rotate(-90 16 20)"
          fill={theme == "light" ? "black" : "white"}
        />
        <rect
          x="1"
          y="19"
          width="18"
          height="12"
          transform="rotate(-90 1 19)"
          stroke={theme == "light" ? "black" : "white"}
          stroke-width="2"
        />
      </svg>

      <div className="items-center gap-[30px] hidden laptop:flex">
        <Navlink page="about" title={"ABOUT"} />
        <Navlink page="works" title={"WORKS"} />
        <Navlink page="experience" title={"EXPERIENCE"} />
        <Navlink page="contact" title={"CONTACT"} />
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 laptop:hidden" />
      </div>
    </motion.div>
  );
};

export default Navbar;
