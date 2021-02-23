import React from "react";
import { Header, Image } from "semantic-ui-react";
import aboutUsImage from "../../src/images/about-us.jpg";

const AboutUs = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px 0" }}>
      <Header as="h1" className="header-text">
        About Us
      </Header>
      <Image
        src={aboutUsImage}
        style={{
          maxWidth: "600px",
          margin: "auto",
          marginBottom: "35px",
          width: "100%",
        }}
      ></Image>
      <p className="body-text">
        We are the plants company based in Utah. We work with a small group of
        plant farmers around Utah and California.
      </p>
      <p className="body-text">
        We have partnered with USPS and FEDEX to be able to ship your plants
        quickly and affordably.
      </p>
    </div>
  );
};

export default AboutUs;
