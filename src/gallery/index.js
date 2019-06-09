import React from "react";
import "./index.scss";

const images = [
  "images/9.JPG",
  "images/0.JPG",
  "images/2.JPG",
  "images/3.JPG",
  "images/4.JPG",
  "images/5.JPG",
  "images/7.JPG",
  "images/1.JPG",
  "images/8.JPG"
];

const Tile = ({ src }) => (
  <div className="tile">
    <img src={src} alt="beautiful farm" />
  </div>
);

const Gallery = () => (
  <div className="gallery">
    <div>
      <div className="wrapper">
        {images.map(src => (
          <Tile src={src} key={src} />
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
