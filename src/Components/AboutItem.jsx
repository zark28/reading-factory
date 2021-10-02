import React from "react";

const AboutItem = ({ head1, head2 }) => {
  return (
    <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
      <h5 class="mb-3 text-primary">
        <i class="fa fa-check text-primary me-3"></i>
        {head1}
      </h5>
      <h5 class="mb-3 text-primary">
        <i class="fa fa-check text-primary me-3"></i>
        {head2}
      </h5>
    </div>
  );
};

export default AboutItem;
