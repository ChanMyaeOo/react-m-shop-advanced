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
        <h1>
          What you wear is how you present yourself to the world, especially
          today, when human contacts are so quick. Fashion is instant language
        </h1>
        <p>Miuccia Prada</p>
        <a href="/">Explore Now</a>
      </div>
    </div>
  );
};
export default Header;
