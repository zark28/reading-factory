import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ pName, detail }) => {
  return (
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
        <div className="service-icon">
          <i className="fa fa-shield-alt text-white"></i>
        </div>
        <h4 className="mb-3">{pName}</h4>
        <p className="m-0">{detail}</p>
        <Link className="btn btn-lg btn-primary rounded " to="">
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
