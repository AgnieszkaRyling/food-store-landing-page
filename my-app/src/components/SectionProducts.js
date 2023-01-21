import ProductsBanana from "./pictures/ProductsBanana.png";
import ProductsOrange from "./pictures/ProductsOrange.png";
import ProductsPapya from "./pictures/ProductsPapaya.png";
import ProductsMango from "./pictures/ProductsMango.png";
import Star from "./pictures/Star.png";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SectionProducts.css";

const SectionProducts = () => {
  return (
    <section className="section-products container mb-150">
      <p className="p-15 text-medium mb-40 text-mobile">Our Products</p>
      <h2 className="h2-text mb-80">Most Popular Products</h2>
      <div className="products-container">
        <div className="product-item">
          <div className="product-picture-box mb-10">
            <img src={ProductsBanana} alt="A banana on a yellow background" />
          </div>
          <div className="products-rating-box">
            <div className="products-star-box mb-20">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
          </div>
          <div className="product-text-box">
            <p className="p-20 mb-20">Summer Veggie</p>
            <div className="picture-promo-text-box mb-20">
              <p className="p-20 text-medium text-line-through">$35</p>
              <p className="p-20 text-green">$29</p>
            </div>
          </div>
          <button type="button" className="btn-transparent">
            <a href="#">
              Buy Now <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </button>
        </div>
        <div className="product-item">
          <div className="product-picture-box mb-10">
            <img src={ProductsPapya} alt="A papaya on an orange background" />
          </div>
          <div className="products-rating-box">
            <div className="products-star-box mb-20">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
          </div>
          <div className="product-text-box">
            <p className="p-20 mb-20">Greanie Seafood</p>
            <div className="picture-promo-text-box mb-20">
              <p className="p-20 text-medium text-line-through">$35</p>
              <p className="p-20 text-green">$29</p>
            </div>
          </div>
          <button type="button" className="btn-transparent">
            <a href="#">
              Buy Now <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </button>
        </div>
        <div className="product-item">
          <div className="product-picture-box mb-10">
            <img src={ProductsMango} alt="A mango on a pink background" />
          </div>
          <div className="products-rating-box">
            <div className="products-star-box mb-20">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
          </div>
          <div className="product-text-box">
            <p className="p-20 mb-20">Fresh Vegetable</p>
            <div className="picture-promo-text-box mb-20">
              <p className="p-20 text-medium text-line-through">$35</p>
              <p className="p-20 text-green">$29</p>
            </div>
          </div>
          <button type="button" className="btn-transparent">
            <a href="#">
              Buy Now <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </button>
        </div>
        <div className="product-item">
          <div className="product-picture-box mb-10">
            <img src={ProductsOrange} alt="An orange on an orange background" />
          </div>
          <div className="products-rating-box mb-20">
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
            <div className="products-star-box">
              <img src={Star} alt="Rating star" />
            </div>
          </div>
          <div className="product-text-box">
            <p className="p-20 mb-20">Fresh Meatyus</p>
            <div className="picture-promo-text-box mb-20">
              <p className="p-20 text-medium text-line-through">$35</p>
              <p className="p-20 text-green">$29</p>
            </div>
          </div>
          <button type="button" className="btn-transparent">
            <a href="#">
              Buy Now <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
