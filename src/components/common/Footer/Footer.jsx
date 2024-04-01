import React from "react";
import IconLink from "../ui/IconLink";
import {
  faGithub,
  faLinkedin,
  faSquareInstagram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { paths } from "../../../constants/constantPaths";

const Footer = () => {
  return (
    <div className="w-full max-w-[1800px] mx-auto flex items-center px-6 pt-4 pb-8 gap-10">
      <p className="font-medium desktop:font-semibold text-[14px]">
        Made with love
      </p>
      <div className="flex items-center gap-[35px]">
        <IconLink title={"ghosh-abhirup"} icon={faGithub} link={paths.github} />
        <IconLink title={"abhirupg"} icon={faLinkedin} link={paths.linkedIn} />
        <IconLink title={"singleufo"} icon={faInstagram} link={paths.insta} />
      </div>
    </div>
  );
};

export default Footer;
