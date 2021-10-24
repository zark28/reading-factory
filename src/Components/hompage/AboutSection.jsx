import React from "react";
import AboutItem from "../AboutItem";

const AboutSection = () => {
  const aboutItems = [
    { head1: "Literacy Clubs", head2: "Professional Staff" },
    { head1: "Fun Learning ", head2: "Volunteers " },
    { head1: "Training", head2: "Support" },
    { head1: "Remedials ", head2: "Partnerships" },
  ];
  return (
    //  About Start
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase text-4xl">
                About Us
              </h5>
              <h1 className="mb-0 ">The Reading Factory</h1>
            </div>
            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="ps-4">
                {/* <h5 className="mb-2">What We Do</h5> */}
                <h4 className="text-primary mb-4">
                  Our core value as an organisation is training and building a
                  strong network of volunteers and individuals, who are equipped
                  with skills and knowledge capable of teaching children in
                  deprive communities in Ghana to become the best of their
                  abilities more.
                </h4>
              </div>
            </div>
            <h5 className="mb-4 fs-5">
              Bridging the gap of literacy between rural and urban schools
            </h5>
            <div className="row g-0 mb-3">
              {aboutItems.map((aboutItem, index) => (
                <AboutItem
                  head1={aboutItem.head1}
                  head2={aboutItem.head2}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/about.jpg"
                alt="img"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
