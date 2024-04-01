import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconLink = ({ title, icon, link }) => {
  const sendToLink = (path) => {
    window.open(path, "_blank");
  };
  return (
    <div className="flex items-center gap-[5px]">
      <FontAwesomeIcon icon={icon} className="w-6 h-6" />
      <p
        className="font-bold text-xs cursor-pointer"
        onClick={() => sendToLink(link)}
      >
        {title}
      </p>
    </div>
  );
};

export default IconLink;
