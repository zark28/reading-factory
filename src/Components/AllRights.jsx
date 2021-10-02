import React from "react";
import { Link } from "react-router-dom";
const AllRights = () => {
  return (
    <div
      className="container-fluid text-white"
      style={{ background: "#061429" }}
    >
      <div className="container text-center">
        <div className="row justify-content-end">
          <div className="col-lg-8 col-md-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "75px" }}
            >
              <p className="mb-0">
                &copy;
                <Link className="text-white border-bottom" href="#">
                  The ReadFactory
                </Link>
                . All Rights Reserved. 2021
                {/* <Link
                  className="text-white border-bottom"
                  href="https://htmlcodex.com"
                >
                  HTML Codex
                </Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRights;
