import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StarsPic from "./pictures/StarsPic.png";
import "./SectionStars.css";

const SectionStars = () => {
  return (
    <section className="section-stars container mb-150">
      <div className="stars-text-box">
        <p className="p-15 text-medium mb-40 mobile-text">Our Stars</p>
        <h2 className="h2-text text-medium mb-60">
          Veggie Food Goes On And Always On
        </h2>
        <div className="stars-box mb-80">
          <div className="star-item">
            <p className="p-40 text-bold text-green">1,500</p>
            <p className="p-14">Sold Products</p>
          </div>
          <div className="star-item">
            <p className="p-40 text-bold text-green">500</p>
            <p className="p-14">Positive Feedback</p>
          </div>
          <div className="star-item">
            <p className="p-40 text-bold text-green">400</p>
            <p className="p-14">Offcial Store</p>
          </div>
        </div>
        <button type="button" className="btn-green button-stars btn-mobile">
          Get Special Promo <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="benefits-picture-box">
        <img src={StarsPic} alt="Green coctail with kivi fruit" />
      </div>
    </section>
  );
};

export default SectionStars;
