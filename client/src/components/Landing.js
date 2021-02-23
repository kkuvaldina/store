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
      <Carousel autoPlay={true} showThumbs={false} dinamicHeight={true}>
        <div>
          <Image src={carouselImage1}></Image>
          <p className="legend legend-item">
            "Gardening adds years to your life and life to your years."
          </p>
        </div>
        <div>
          <Image src={carouselImage2}></Image>
          <p className="legend legend-item">
            "If you’ve never experienced the joy of accomplishing more than you
            can imagine, plant a garden."
          </p>
        </div>
        <div>
          <Image src={carouselImage3}></Image>
          <p className="legend legend-item">
            "I hope that while so many people are out smelling the flowers,
            someone is taking the time to plant some."
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Landing;
