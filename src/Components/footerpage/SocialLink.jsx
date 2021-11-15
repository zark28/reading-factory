import React from "react";

const SocialLink = ({ links, linkClass, text, icon }) => {
  return (
    <a
      href={`https://${links}`}
      target="_blank"
      className={linkClass}
      rel="noreferrer"
    >
      <i className={icon}></i>
      {text}
    </a>
  );
};

export default SocialLink;
