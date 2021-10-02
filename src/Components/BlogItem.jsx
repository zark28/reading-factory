import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({
  delay,
  blogImg,
  blogLink,
  blogger,
  date,
  heading,
  text,
  blogLink2,
}) => {
  const maxLength = 10;

  return (
    <div className="col-md-6 my-5 wow slideInUp" data-wow-delay="0.1s">
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img className="img-fluid" src={blogImg} alt={blogLink2} />
          <Link
            className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
            href=""
          ></Link>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2"></i>
              {blogger}
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2"></i>
              {date.length > maxLength ? date.substring(0, maxLength) : date}
            </small>
          </div>
          <h4 className="mb-3">{heading}</h4>
          <details className="details">
            <summary>Read More</summary>
            <p>{text}</p>
          </details>

          {/* <Link className="text-uppercase" href="">
            Read More <i className="bi bi-arrow-right"></i>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
