import React from "react";
import { Header, Image } from "semantic-ui-react";
import contactUsImage from "../../src/images/contact-us.jpeg";

const ContactUs = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px 0" }}>
      <Header as="h1" className="header-text">
        Contact Us
      </Header>
      <Image
        src={contactUsImage}
        style={{
          maxWidth: "600px",
          margin: "auto",
          marginBottom: "35px",
        }}
      ></Image>
      {/* <p className="body-text">Our Contacts:</p> */}
      <div className="contacts body-text">
        <a>&#x1F4CD; Salt Lake City, Utah</a>
        <a href="tel:385-OAKLEAF">&#x1F4DE; Phone: 385-OAKLEAF</a>
        <a href="mailto: oak-leaf-store@gmail.com">
          &#x1F4E9; Email: oak-leaf-store@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
