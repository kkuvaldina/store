import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image, Button } from "semantic-ui-react";

import carouselImage1 from "../../src/images/carousel-1.jpg";
import carouselImage2 from "../../src/images/carousel-2.jpg";
import carouselImage3 from "../../src/images/carousel-3.jpg";

const Landing = () => {
  //const autoPlay = true;

  return (
    <div className="landing">
      <div className="landing-header">
        <h1>Oak Leaf Store</h1>
        <h4>Home is where my plants are</h4>
      </div>
      <Carousel autoPlay={true}>
        <div>
          <Image src={carouselImage1}></Image>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src={carouselImage2}></Image>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src={carouselImage3}></Image>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Landing;
