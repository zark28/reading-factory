import React from "react";

const FeaturesItems = ({ delay, icon, heading, subText }) => {
  return (
    <div
      className=" d-flex flex-col item-center justify-between wow zoomIn text-align-center mb-5"
      data-wow-delay={delay}
    >
      <div
        className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
        style={{ width: "80px", height: "80px" }}
      >
        <i className={`${icon} text-white`}></i>
      </div>
      <details className="details">
        <summary>
          {" "}
          <h4 className="d-inline">{heading}</h4>
        </summary>
        <p className="mb-4 fs-5 text-primary text-wrap details">{subText}</p>
      </details>
    </div>
  );
};

export default FeaturesItems;
