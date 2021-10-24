import React from "react";
import TeamItem from "./TeamItem";

const TeamSection = () => {
  const teamMembers = [
    {
      img: "/img/faces/sara.jpg",
      details:
        "Saraswati Arthur is a teacher and co-founder of The Reading Factory (TeRF).She has a Bachelor and Masters in English Education and Curriculum Studies respectively from the University of Cape Coast, Ghana. She has over 10 years’ experience in teaching both in the rural and urban centres across Ghana. Her experience in teaching in various levels in both rural and urban areas in Ghana led to the establishment of TeRF with a team of educationist to bridge the gap ofliteracy between the rural and urban areas.",
      name: "Saraswati Arthur",
      role: "Teacher and Co-founder",
      delay: 0.3,
    },
    {
      img: "/img/faces/william.jpg",
      details:
        "William Kofi Adda is a co-founder and project officer of The Reading Factory.  He has a National Higher Diploma in Marketing from Cape Coast Technical University. He has more than 6 years’ experience in digital marketing and over 4 years’ experience in teaching English language in basic schools. He oversees the general projects and fundraising activities of TeRF.",
      name: "William Kofi Adda",
      role: "Project officer",
      delay: 0.6,
    },

    {
      img: "/img/faces/clifford.jpg",
      details:
        "Clifford Ateesi is the programmes manager for TeRF. He has Bachelor’s degree in Social Science Education at University of Education Winneba and currently pursuing his Masters in Environmental planning and Development at University of Energy and Natural Sciences. He has scores of experience in the hospitability business and the development sector. Clifford support the team with proposal writing, strategies for fundraising activities and general development of TeRF projects.",
      name: "Clifford Ateesi",
      role: "Programs Manager",
      delay: 0.9,
    },
  ];
  return (
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div
          class="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-5 text-4xl">Our Team</h1>
          <h5 class="fw-bold text-primary">
            The Reading Factory has a formidable 7-member Board of Advisors with
            different professional backgrounds but have keen interest in
            equitable education for the underprivileged.{" "}
          </h5>
        </div>
        <div class="row g-5">
          {teamMembers.map((teamMember, index) => (
            <TeamItem
              name={teamMember.name}
              delay={teamMember.delay}
              role={teamMember.role}
              details={teamMember.details}
              img={teamMember.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
