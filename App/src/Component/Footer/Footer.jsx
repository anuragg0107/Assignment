import React from "react";
import "./Footer.css";
import logo from "../../Images/Logowhite.png";
import twitter from "../../Images/Twitter.png";
import facebook from "../../Images/Facebook.png";
import instagram from "../../Images/Instagram.png";

const Footer = () => {
  return (
    <div className="footer-top">
      <div className="left-side-footer">
        <div className="white-logo">
          <img src={logo} alt="logo" />
        </div>
        <p>
          Stay up to date on the latest features and releases by joining our
          newslatter.
        </p>
        <div className="subscribe">
          <input placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
        <p>
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.{" "}
        </p>
      </div>
      <div className="right-side-footer">
        <div className="links-container">
          <div className="links">
            <b>Quick Links</b>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
        <div className="links-container">
          <div className="links">
            <b style={{ paddingLeft: "32px" }}>Updates</b>
            <ul style={{ textAlign: "center" }}>
              <li>News</li>
              <li>Blogs</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="links-container">
          <div className="links">
            <b>Follow Us</b>
            <ul className="follow">
              <li>
                <div className="follow-links">
                  <img src={twitter} alt="twitter" />
                  <p>Twitter</p>
                </div>
              </li>
              <li>
                <div className="follow-links">
                  <img src={facebook} alt="facebook" />
                  <p>Facebook</p>
                </div>
              </li>
              <li>
                <div className="follow-links">
                  <img src={instagram} alt="instagram" />
                  <p>Instagram</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
