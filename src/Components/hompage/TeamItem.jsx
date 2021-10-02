import React from "react";
import { Link } from "react-router-dom";

const TeamItem = ({ delay, role, name, details, img }) => {
  return (
    <div className="col-lg-4 wow slideInUp" data-wow-delay={delay}>
      <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={img} alt="" />
          <div className="team-social">
            <Link
              className="btn btn-lg btn-primary btn-lg-square rounded"
              to=""
            >
              <i className="fab fa-twitter fw-normal"></i>
            </Link>
            <Link
              className="btn btn-lg btn-primary btn-lg-square rounded"
              to=""
            >
              <i className="fab fa-facebook-f fw-normal"></i>
            </Link>
            <Link
              className="btn btn-lg btn-primary btn-lg-square rounded"
              to=""
            >
              <i className="fab fa-instagram fw-normal"></i>
            </Link>
            <Link
              className="btn btn-lg btn-primary btn-lg-square rounded"
              to=""
            >
              <i className="fab fa-linkedin-in fw-normal"></i>
            </Link>
          </div>
        </div>
        <div className="text-center py-4">
          <h4 className="text-primary">{name}</h4>
          <h5 className="text-uppercase m-0">{role}</h5>
          <details className="details">
            <summary>Read More</summary>
            <p className="details">{details}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
