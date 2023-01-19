import Truck from "./pictures/Truck.png";
import Vallet from "./pictures/Vallet.png";
import Percent from "./pictures/Percent.png";
import Headphones from "./pictures/Headphones.png";

import "./SectionFeatures.css";

const SectionFeatures = () => {
  return (
    <section className="section-features container">
      <div className="features-container">
        <div className="feature-box">
          <div className="feature-picture-box">
            <img src={Truck} alt="" />
          </div>
          <div className="feature-text-box">
            <p className="p-18">Free Shipping</p>
            <p className="p-14">Oders over $140</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-picture-box">
            <img src={Vallet} alt="" />
          </div>
          <div className="feature-text-box">
            <p className="p-18">Quick Payment</p>
            <p className="p-14">100% secure payment</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-picture-box">
            <img src={Percent} alt="" />
          </div>
          <div className="feature-text-box">
            <p className="p-18">Special Promo</p>
            <p className="p-14">Get special promo</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-picture-box">
            <img src={Headphones} alt="" />
          </div>
          <div className="feature-text-box">
            <p className="p-18">24/7 Support</p>
            <p className="p-14">Ready support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
