import React from "react";
// import MyCarousel from "./MyCarousel";
import NavBar from "./NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wallpapper from "./Wallpapper";

const Header = () => {
  return (
    <div>
      <NavBar />
      <Wallpapper />
      {/* <MyCarousel /> */}
    </div>
  );
};

export default Header;
