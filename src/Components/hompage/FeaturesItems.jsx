import React from "react";

const FeaturesItems = ({ delay, icon, heading, subText }) => {
  return (
    <div class="col-4 wow zoomIn text-align-center" data-wow-delay={delay}>
      <div
        class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
        style={{ width: "60px", height: "60px" }}
      >
        <i class={`${icon} text-white`}></i>
      </div>
      <h4>{heading}</h4>
      <p class="mb-4 fs-5 text-primary">{subText}</p>
    </div>
  );
};

export default FeaturesItems;
