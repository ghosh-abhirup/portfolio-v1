import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const IconLink = ({ title, icon, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sendToLink = (path) => {
    window.open(path, "_blank");
  };
  return (
    <div
      className="flex items-center gap-[5px] cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => sendToLink(link)}
    >
      <FontAwesomeIcon icon={icon} className="w-6 h-6" />
      <div className="font-bold text-xs relative  overflow-hidden">
        <p
          className={`${
            isHovered ? "-translate-y-[50px]" : ""
          } transition-all ease-out duration-500`}
        >
          {title}
        </p>
        <p
          className={`${
            isHovered ? "bottom-0" : "-bottom-[50px]"
          } absolute left-0 transition-all ease-out duration-500`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default IconLink;
