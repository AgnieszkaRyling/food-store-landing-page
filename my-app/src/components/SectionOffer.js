import OfferCarrot from "./pictures/OfferCarrot.png";
import OfferLime from "./pictures/OfferLime.png";
import OfferPapaya from "./pictures/OfferPapaya.png";
import OfferPomegranate from "./pictures/OfferPomegranate.png";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SectionOffer.css";

const SectionOffer = () => {
  return (
    <section className="section-offer container mb-150">
      <div className="offer-text-box">
        <p className="p-15 text-medium mb-40 mobile-text">Our features</p>
        <h2 className="h2-text text-medium mb-60">Variety of Foods</h2>
      </div>
      <div className="offer-items-container">
        <div className="offer-item item-1">
          <div className="offer-picture-box">
            <img src={OfferCarrot} alt="Healty fruit and vegetables" />
          </div>
          <div className="offer-item-text">
            <p className="p-32 text-medium mb-40">Veggies Are Forever</p>
            <p className="p-text">We offer the following services</p>
            <button type="button" className="btn-light">
              Discover Now
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="offer-item item-2">
          <div className="offer-picture-box">
            <img src={OfferPapaya} alt="Delicious papaya" />
          </div>
          <div className="offer-item-text">
            <p className="p-32 text-medium mb-40">Good For Your Skin</p>
            <p className="p-text">We offer the following services</p>
            <button type="button" className="btn-light">
              Discover Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="offer-item item-3">
          <div className="offer-item-text">
            <p className="p-32 text-medium mb-40">Veggi Food Groove</p>
            <p className="p-text">We offer the following services</p>
            <button type="button" className="btn-light">
              Discover Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="offer-picture-box">
            <img src={OfferPomegranate} alt="Fresh pomegranade" />
          </div>
        </div>
        <div className="offer-item item-4">
          <div className="offer-item-text">
            <p className="p-32 text-medium mb-40">That Comes Close</p>
            <p className="p-text">We offer the following services</p>
            <button type="button" className="btn-light">
              Discover Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="offer-picture-box">
            <img src={OfferLime} alt="Fresh lemon" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOffer;
