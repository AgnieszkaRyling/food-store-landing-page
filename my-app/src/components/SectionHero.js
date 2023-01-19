import HeroImage from "./pictures/HeroImage.png";
import HeroPortrait from "./pictures/HeroPortrait.png";
import Star from "./pictures/Star.png";
import LogoOne from "./pictures/LogoOne.png";
import LogoTwo from "./pictures/LogoTwo.png";
import LogoThree from "./pictures/LogoThree.png";

import "./SectionHero.css";

const SectionHero = () => {
  return (
    <section className="section-hero container">
      <div className="hero-row-one">
        <div className="hero-text-box">
          <h1 className="h1-text">
            We are serious <br></br>for food.
          </h1>
          <p className="p-text">
            We strive to provide a space where guests can connect with
            themselves and explore their full potential, offering a safe place.
          </p>
          <button type="button" className="btn-green">
            Get started
          </button>
        </div>
        <div className="hero-image-box">
          <img src={HeroImage} alt="A cooking woman" />
        </div>
        <div className="hero-opinion-box">
          <div classNAme="hero-opinion-image-box">
            <img src={HeroPortrait} alt="A happy client" />
          </div>
          <p className="p-15 text-medium">Good Quality Product</p>
        </div>
        <div className="hero-rating-box">
          <p className="p-15 text-medium">5.0 ratings</p>
          <div className="hero-rating-stars-box">
            <div className="hero-rating-picture-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="hero-rating-picture-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="hero-rating-picture-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="hero-rating-picture-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="hero-rating-picture-box">
              <img src={Star} alt="Rating star" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-row-two">
        <div className="hero-company-box">
          <div className="company-picture-box-one">
            <img src={LogoOne} alt="Company1 logo" />
          </div>
          <div className="company-picture-box-two">
            <img src={LogoTwo} alt="Company1 logo" />
          </div>
          <div className="company-picture-box-three">
            <img src={LogoThree} alt="Company1 logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
