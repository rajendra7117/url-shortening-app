import React from "react";
import "./Footer.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
const fb: string = require("../images/icon-facebook.svg").default;
const twitter: string = require("../images/icon-twitter.svg").default;
const pinterest: string = require("../images/icon-pinterest.svg").default;
const insta: string = require("../images/icon-instagram.svg").default;
const Footer = () => {
  return (
    <footer className="footer">
      <div className="title">
        <h1>Shortly</h1>
      </div>
      <div className="details">
        <h3>Features</h3>
        <div>
          <h5>Link Shortening</h5>
          <h5>Branded Links</h5>
          <h5>Analytics</h5>
        </div>
      </div>
      <div className="details">
        <h3>Resources</h3>
        <div>
          <h5>Blog</h5>
          <h5>Developers</h5>
          <h5>Support</h5>
        </div>
      </div>
      <div className="details">
        <h3>Company</h3>
        <div>
          <h5>About</h5>
          <h5>Our Team</h5>
          <h5>Careers</h5>
          <h5>Contact</h5>
        </div>
      </div>
      <div className="icons">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaPinterestP />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
