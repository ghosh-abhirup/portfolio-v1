import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navlink = ({ page, title }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const routeToPage = (p) => {
    navigate(`/${p}`);
  };

  return (
    <div
      className="navlinks"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => routeToPage(page)}
    >
      <p className="">{title}</p>
      <div
        className={`bottomBorderOnHover ${isHovered ? "expanded" : ""}`}
      ></div>
    </div>
  );
};

export default Navlink;
