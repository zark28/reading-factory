import React from "react";
import { Link } from "react-router-dom";

const FooterLInk = ({ text, linkClass, icon, links }) => {
  return (
    <Link to={links} className={linkClass}>
      <i className={icon}></i>
      {text}
    </Link>
  );
};

export default FooterLInk;
