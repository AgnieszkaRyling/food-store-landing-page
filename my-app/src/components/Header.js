import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  return (
    <header className="header-container container">
      <div className="header-box">
        <div className="logo-box">
          <p className="p-32 p-green">Foodies</p>
        </div>
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
            Mobile
          </button>
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
