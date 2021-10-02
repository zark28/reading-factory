import React from "react";
import AllRights from "./AllRights";
import FooterLInk from "./FooterLInk";

const Footer = () => {
  const linkClass1 = "btn btn-primary btn-square me-2";
  const linkClass2 = "text-light mb-2";
  const icon2 = "bi bi-arrow-right text-primary me-2";

  const linkItems = [
    { linkClass: linkClass1, icon: "fab fa-twitter fw-normal" },
    { linkClass: linkClass1, icon: "fab fa-facebook-f fw-normal" },
    { linkClass: linkClass1, icon: "fab fa-linkedin-in fw-normal" },
    {
      linkClass: "btn btn-primary btn-square",
      icon: "fab fa-instagram fw-normal",
    },
  ];
  const linkItems2 = [
    { linkClass: linkClass2, icon: icon2, text: "Home", links: "/" },
    { linkClass: linkClass2, icon: icon2, text: "About", links: "/about" },
    {
      linkClass: linkClass2,
      icon: icon2,
      text: "Our Projects",
      links: "/projects",
    },
    {
      linkClass: linkClass2,
      icon: icon2,
      text: "Meet The Team",
      links: "/team",
    },
    { linkClass: linkClass2, icon: icon2, text: "Latest Blog", links: "/blog" },
    {
      linkClass: "text-light",
      icon: icon2,
      text: "Support Us",
      links: "/donate",
    },
  ];
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <a href="index.html" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    <i className="fa fa-user-tie me-2"></i>The Read Factory
                  </h1>
                </a>
                <p className="mt-3 mb-4">
                  Lorem diam sit erat dolor elitr et, diam lorem justo amet
                  clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum
                  sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.
                </p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                    />
                    <button className="btn btn-dark">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">Cape Coast, Centeral Region, Ghana</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">info@example.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+233 24 773 1083</p>
                  </div>
                  <div className="d-flex mt-4">
                    {linkItems.map((linkItem, index) => (
                      <FooterLInk
                        linkClass={linkItem.linkClass}
                        icon={linkItem.icon}
                        links={linkItem.links}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    {linkItems2.map((linkItem, index) => (
                      <FooterLInk
                        linkClass={linkItem.linkClass}
                        icon={linkItem.icon}
                        text={linkItem.text}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    {linkItems2.map((linkItem, index) => (
                      <FooterLInk
                        linkClass={linkItem.linkClass}
                        icon={linkItem.icon}
                        text={linkItem.text}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllRights />
    </div>
  );
};

export default Footer;
