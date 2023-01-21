import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-grid-col-one">
          <div className="logo-box  mb-40">
            <p className="p-32 text-green">Foodies</p>
          </div>
          <div className="col-one-text-box mb-40">
            <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="footer-icons-box">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="footer-grid-col-two">
          <p className="p-24 text-medium mb-40">About Us</p>
          <ul className="about-us-list">
            <li className="mb-10">
              <a href="#">About</a>
            </li>
            <li className="mb-10">
              <a href="#">Service</a>
            </li>
            <li className="mb-10">
              <a href="#">Contact</a>
            </li>
            <li className="mb-10">
              <a href="#">Company</a>
            </li>
          </ul>
        </div>
        <div className="footer-grid-col-three">
          <p className="p-24 text-medium mb-40">Company</p>
          <ul className="about-us-list">
            <li className="mb-10">
              <a href="#">Partnership</a>
            </li>
            <li className="mb-10">
              <a href="#">Terms of Use</a>
            </li>
            <li className="mb-10">
              <a href="#">Privacy</a>
            </li>
            <li className="mb-10">
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-grid-col-four">
          <p className="p-24 text-medium mb-40">Get in touch</p>
          <div className="col-four-text-box mb-40">
            <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="input-email-box">
            <input type="text" className="input-email" placeholder="Email" />
            <button type="button" className="btn-green btn-footer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer-copyright-box">
        <p className="p-text copyright-text">Copyright © 2021 Foodies.</p>
      </div>
    </footer>
  );
};

export default Footer;
