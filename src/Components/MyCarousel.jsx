import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./HeaderCarousel.css";

const MyCarousel = () => {
  const slideItems = [
    { img: "img/blog-1.jpg", alt: "alt", text: "hello1" },
    { img: "img/blog-2.jpg", alt: "alt", text: "hello2" },
    { img: "img/blog-3.jpg", alt: "alt", text: "hello3" },
  ];
  return (
    <Carousel
      autoPlay
      interval="5000"
      infiniteLoop
      transitionTime="3000"
      useKeyboardArrows
      autoFocus
    >
      {slideItems.map((slideItem, index) => (
        <div key={index} className="slide-item">
          <img src={slideItem.img} alt={slideItem.alt} />

          <div className="p-3 slide-text">
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
              {slideItem.text}
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
              {slideItem.text}
            </h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
