import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import AboutItem from "../Components/AboutItem";
import FeaturesSection from "../Components/hompage/FeaturesSection";

const AboutPage = () => {
  const aboutItems = [
    { head1: "Literacy Clubs", head2: "Professional Staff" },
    { head1: "Fun Learning ", head2: "Volunteers " },
    { head1: "Training", head2: "Support" },
    { head1: "Remedials ", head2: "Partnerships" },
  ];

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">
                Bridging the gap of literacy between rural and urban schools
              </h1>
            </div>
            <p className="mb-4 fs-4 text-primary">
              The Reading Factory (TeRF) is a registered Non-profit Organisation
              in Ghana with the registration number CG0089202019.
              <br />
              <br />
              It was formedin 2018 to help bridge the gap of literacy between
              rural and urban schools in Ghana through the training of
              volunteers and teachers in TeRF hybrid literacy curriculum.
              Focusing on Sustainable Development Goal 4 (Quality Education),
              the organisation establishes literacy clubs in public basic
              schools and community libraries in deprived communities to improve
              pupil’s literacy ability as well as offering remedial lessons for
              students with reading difficulties.
              <br />
              <br />
              The organization uses an approach called “teaching students at the
              right level”. We assess children’s literacy skills using classroom
              assessment and regroup students according to learning level rather
              than age or grade before teaching and learning begins in our
              clubs.
            </p>
            <div className="row g-0 mb-3">
              <h3 className="mb-3">
                Teaching students at the right level Approach
              </h3>
              {aboutItems.map((aboutItem, index) => (
                <AboutItem
                  head1={aboutItem.head1}
                  head2={aboutItem.head2}
                  key={index}
                />
              ))}
            </div>

            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className=" fas fa-credit-card text-white"></i>
              </div>
              <h4 className="text-primary mb-0 m-2">
                <Link className="mb-2 " to="/donate">
                  {" "}
                  Donate to Our Course
                </Link>
              </h4>
              {/* <div className="ps-4 mb-5">
                
              </div> */}
            </div>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/about.jpg"
                style={{ objectFit: "cover" }}
                alt="aboutpage banner"
              />
            </div>
          </div>
        </div>
        <div className="section-title position-relative pb-3 mb-2">
          {/* <h5 className="fw-bold text-primary text-uppercase">About Us</h5> */}
          <h2 className="mb-0">The Read Factory SO far{"...."}</h2>
        </div>
        <p className="mb-5 fs-4 text-primary">
          In the past 17 months, we have used TeRF hybrid curriculum and
          audio-visual aids to teach literacy to over 500 students in 10 schools
          in Cape Coast, Tamale and Savelugu in Central and Northern Regions
          respectively.
          <br />
          <br />
          We have also trained 15+ teachers in Cape Coast and Tamale on the
          creative ways of teaching phonetics with the use of videos, games and
          the blending of English and local language.
          <br />
          <br />
          The impact we have created over the few months have gained recognition
          from Bayport and Reach for Change, as they awarded us with the best
          literacy idea in 2018 Best Teacher Innovative Competition. clubs.
        </p>
        <div className="section-title position-relative pb-3 mb-2">
          {/* <h5 className="fw-bold text-primary text-uppercase">About Us</h5> */}
          <h2 className="mb-0">Our Vision</h2>
        </div>
        <p className="mb-4 fs-4 text-primary">
          Our core value as an organisation is training and building a strong
          network of volunteers and individuals, who are equipped with skills
          and knowledge capable of teaching children in deprive communities in
          Ghana to become the best of their abilities.
        </p>
        <FeaturesSection heading="What We Do" />
      </div>
    </div>
  );
};

export default AboutPage;
