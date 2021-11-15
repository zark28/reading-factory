import React from "react";

const FeaturesItems = ({ delay, icon, heading, subText }) => {
  return (
    <div
      className=" d-flex flex-col items-center justify-center m-5"
      data-wow-delay={delay}
    >
      <div
        className="bg-primary d-flex items-center"
        style={{ width: "100px", height: "100px" }}
      >
        <i className={`${icon} text-white flex-1`}></i>
      </div>
      <div className=" w-">
        <h4 className="d-inline">{heading}</h4>

        <p className="mb-4 fs-5 text-primary text-left text-wrap details">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default FeaturesItems;
