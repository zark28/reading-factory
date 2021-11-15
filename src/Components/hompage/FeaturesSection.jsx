import React from "react";
import FeaturesItems from "./FeaturesItems";

const FeaturesSection = ({ heading, text1, text2 }) => {
  const featureItems1 = [
    {
      delay: "0.2s",
      icon: "fa fa-users",
      heading: "Literacy Clubs",
      subText:
        "Establish literacy clubs in various public, private schools and community libraries to teach children how to read, assimilate and write effectively.",
    },
    {
      delay: "0.6s",
      icon: "fa fa-gamepad",
      heading: "Fun Learning",
      subText:
        "Focus on using technology, innovation, games and creativity to make learning more fun and engaging.",
    },
    {
      delay: "0.4s",
      icon: "fa fa-users-cog",
      heading: "Training",
      subText:
        "Train individuals and volunteers across Ghana with our hybrid literacy curriculum (local language and English Language) to support them in teaching pupils in their local literacy clubs.",
    },
    {
      delay: "0.2s",
      icon: "fa fa-user-plus",
      heading: "Volunteers",
      subText:
        "Individuals and volunteers trained in our literacy approach serve as tutors, patrons and club leaders to manage the growth and sustainability of the club.",
    },
    {
      delay: "0.6s",
      icon: "fa fa-medkit",
      heading: "Support",
      subText:
        "We support schools with our established clubs with age appropriate books and textbooks.",
    },
    {
      delay: "0.6s",
      icon: "fa fa-graduation-cap",
      heading: "Remedials",
      subText:
        "We offer adult tailored remedial ses to adults and senior high school students who struggle to read, assimilate and write.",
    },
    {
      delay: "0.6s",
      icon: "fa fa-recycle",
      heading: "Partnerships",
      subText:
        "We build partnership with government, schools, NGOs, donors, individuals and others across the globe to share our knowledge to scale up effective programmes and advance literacy and education in entirety.",
    },
  ];
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container d-flex  ">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="mb-0 text-4xl">{heading}</h1>
          <h5 className="fw-bold text-xl text-primary ">
            {text1}
            <br />
            {text2}
          </h5>
          <div className="grid grid-cols-2">
            {featureItems1.map((featureItem, index) => (
              <FeaturesItems
                delay={featureItem.delay}
                heading={featureItem.heading}
                icon={featureItem.icon}
                subText={featureItem.subText}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
