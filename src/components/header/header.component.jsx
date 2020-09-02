import React from "react";
import Product from "../../assets/videos/product.mp4";
import ProductImage from "../../assets/images/product.png";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="outer-container">
      <div className="video-container">
        <video autoPlay loop muted poster={ProductImage}>
          <source src={Product} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
      <div className="text">
        <h1 className="header_title">
          Be your own kind of beautiful.
          <br /> Choose what you want in our store?
        </h1>
        <a href="#directory" className="header_explore">
          Explore Now
        </a>
      </div>
    </div>
  );
};
export default Header;
