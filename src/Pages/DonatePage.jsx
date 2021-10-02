import React from "react";
import AboutItem from "../Components/AboutItem";
// import Input from "../Components/contactpage/Input";

const ContactPage = () => {
  const donateUse = [
    {
      use1: "Training activities.",
      use2: "Purchasing teaching and learning resources",
    },
    {
      use1: "Development and sustainability of the clubs.",
      use2: "Inplimentation of the projects.",
    },
    { use1: "Purchasing age appropriate books", use2: "Lorem Lorem lorem" },
  ];
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Support Us</h5>
          <h1 className="mb-5">
            Grateful for your support, donation can be made via:
          </h1>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div
              className="d-flex align-items-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">World or Mobile Money Number</h5>
                <h4 className="text-primary mb-0">+233 247 731 083</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex align-items-center wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Email Us</h5>
                <h4 className="text-primary mb-0">info@example.com /</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex align-items-center wow fadeIn"
              data-wow-delay="0.8s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">
                  For Larger Donations, Please Contact us Directly
                </h5>
                <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <h4 className="text-primary mb-2 d-flex flex-wrap jusify-content-space-around align-items-center">
              <h5 className="mb-5 fw-bold fs-2">
                It is important to note that every donation made will:
              </h5>
              {donateUse.map((use, index) => (
                <AboutItem head1={use.use1} head2={use.use2} key={index} />
              ))}
            </h4>
          </div>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0"
              style={{ minHeight: "350px", border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="googlemap"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
