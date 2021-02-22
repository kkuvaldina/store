import React from "react";
import { Header } from "semantic-ui-react";
import facebook from "../../src/images/facebook.svg";
import twitter from "../../src/images/twitter.svg";
import instagram from "../../src/images/instagram.svg";
import email from "../../src/images/email.svg";

const Footer = () => {
  return (
    <div className="footer" style={{ textAlign: "center", padding: "50px 0" }}>
      <Header as="h4" className="footer-header">
        Follow Us
      </Header>
      <img className="social-item" src={facebook}></img>
      <img className="social-item" src={twitter}></img>
      <img className="social-item" src={instagram}></img>
      <img className="social-item" src={email}></img>
    </div>
  );
};

export default Footer;
