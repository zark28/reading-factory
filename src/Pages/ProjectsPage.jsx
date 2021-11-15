import React from "react";
import ProjectItem from "../Components/projectpage/ProjectItem";

const ProjectsPage = () => {
  const projectItems = [
    {
      name: "Web Security",
      detail:
        "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      name: "Data Analysis",
      detail:
        "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      name: "Web Development",
      detail:
        "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      name: "App Development",
      detail:
        "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      name: "SEO Optimization",
      detail:
        "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
  ];
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase text-4xl">
            Our Projects
          </h5>
          <h1 className="mb-0">THE READING FACTORY SO FAR…</h1>
        </div>
        <div className="row g-5">
          {projectItems.map((item, index) => (
            <ProjectItem pName={item.name} detail={item.detail} key={index} />
          ))}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Call Us/Donate</h3>
              <p className="text-white mb-3">
                Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
                magna stet eirmod
              </p>
              <h2 className="text-white mb-0">+233 24 773 1083</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
