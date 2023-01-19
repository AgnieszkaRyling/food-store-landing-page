import { useState } from "react";
import "./Header.css";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  return (
    <header className="header-container container">
      <div className="header-box">
        <div className="logo-box">
          <p className="p-32 text-green">Foodies</p>
        </div>
        <div className="menu-box">
          <ul className="menu-list">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Our company</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
          </ul>
          <div className="mobile-button-icon-box">
            <button
              type="button"
              className="mobile-button"
              onClick={() => setIsOpenMobileMenu((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        {isOpenMobileMenu && (
          <div className="mobile-menu">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Our company</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
