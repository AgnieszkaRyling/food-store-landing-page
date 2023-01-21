import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Banner from "./pictures/Banner.png";

import "./SectionBanner.css";

const SectionBanner = () => {
  return (
    <section className="section-banner container mb-80">
      <div className="banner-picture-box">
        <img src={Banner} alt="" />
      </div>
      <div className="banner-text-box">
        <h2 className="h2-text text-white text-center mb-40">
          Veggie Foods? Ingredients You Want To Try
        </h2>
      </div>
      <button type="button" className="btn-green button-banner">
        Get started <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  );
};

export default SectionBanner;
