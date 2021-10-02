import React from "react";
// import { Link } from "react-router-dom";

const GalleryItem = ({ delay, heading, author, details, img }) => {
  return (
    <div className="col-lg-4 wow slideInUp" data-wow-delay={delay}>
      <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={img} alt="" />
        </div>
        <div className="text-center py-4">
          <h4 className="text-primary">{author}</h4>
          <h5 className="text-uppercase m-0">{heading}</h5>
          <details className="details">
            <summary>Read More</summary>
            <p className="details">{details}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
