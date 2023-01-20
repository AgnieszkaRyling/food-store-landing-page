import Benefits from "./pictures/Benefits.png";
import Check from "./pictures/Check.png";
import "./SectionBenefits.css";

const SectionBenefits = () => {
  return (
    <section className="section-benefits container mb-150">
      <div className="benefits-picture-box">
        <img src={Benefits} alt="Fruit and vegetables" />
      </div>
      <div className="benefits-text-box">
        <p className="p-15 text-medium mb-40 mobile-text">Our Benefits</p>
        <h2 className="h2-text text-medium mb-60">
          The More Healthy Food The Better
        </h2>
        <div className="benefits-list-box">
          <div className="benefits-item mb-10">
            <div className="benefits-check-box">
              <img src={Check} alt="" />
            </div>
            <p className="p-text">Be Alive With Veggie Food.</p>
          </div>
          <div className="benefits-item mb-10">
            <div className="benefits-check-box">
              <img src={Check} alt="" />
            </div>
            <p className="p-text">It's The Place To Be.</p>
          </div>
          <div className="benefits-item mb-10">
            <div className="benefits-check-box">
              <img src={Check} alt="" />
            </div>
            <p className="p-text">Nonstop Veggie Food.</p>
          </div>
          <div className="benefits-item mb-10">
            <div className="benefits-check-box">
              <img src={Check} alt="" />
            </div>
            <p className="p-text">The Best Silk Dish In Town</p>
          </div>
          <div className="benefits-item mb-20">
            <div className="benefits-check-box">
              <img src={Check} alt="" />
            </div>
            <p className="p-text">Truffles, Egg & Pumpkin Spice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
