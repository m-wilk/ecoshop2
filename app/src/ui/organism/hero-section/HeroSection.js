import Image from "../../atoms/imagine/Image";
import HeroImg1 from "../../../assets/img/hero-img-1.png";
import HeroImg2 from "../../../assets/img/hero-img-2.png";
import HeroImg3 from "../../../assets/img/hero-img-3.png";
import Slider from "react-slick";
import { ReactComponent as FreeShipping } from "../../../assets/img/free-shipping.svg";
import { ReactComponent as FreeReturn } from "../../../assets/img/free-return.svg";
import { ReactComponent as SecurePayment } from "../../../assets/img/secure-payment.svg";
import { ReactComponent as BestQuality } from "../../../assets/img/best-quality.svg";


const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
};
const HeroSection = () => {
  return (
    <div className="bg-hero">
      <div className="container">
        <Slider {...settings}>
          <div className="d-flex align-items-center slider-container">
            <div className="flex-1">
              <span className="text-uppercase text-primary inter-500 es-subtitle-size">
                Fresh Grocery
              </span>
              <h1 className="league-spartan-bold es-h1-xl">
                There's you can Buy your all of Grocery Products.
              </h1>
              <a className="text-decoration-none rounded mt-2 mb-2 d-inline-block  es-shop-btn">
                Shop Now
                <span className="ms-2 icon-arrow-right d-inline-block"></span>
              </a>
            </div>
            <div className="hero-section-wrapper-img d-flex align-items-center">
                <Image className="img-fluid" src={HeroImg1} />
            </div>
          </div>
          <div className="d-flex align-items-center slider-container">
            <div className="flex-1">
              <span className="text-uppercase text-primary inter-500 es-subtitle-size">
                Fresh Grocery
              </span>
              <h1 className="league-spartan-bold es-h1-xl">
                We Provide Fresh and Organic Fruits To Your Door.
              </h1>
              <a className="text-decoration-none rounded mt-2 mb-2 d-inline-block  es-shop-btn">
                Shop Now
                <span className="ms-2 icon-arrow-right d-inline-block"></span>
              </a>
            </div>
            <div className="hero-section-wrapper-img d-flex align-items-center">
                <Image className="img-fluid" src={HeroImg2} />
            </div>
          </div>
          <div className="d-flex align-items-center slider-container">
            <div className="flex-1">
              <span className="text-uppercase text-primary inter-500 es-subtitle-size">
                Fresh Grocery
              </span>
              <h1 className="league-spartan-bold es-h1-xl">
                You Can Buy All the Grocery Items Hasslefree
              </h1>
              <a className="text-decoration-none rounded mt-2 mb-2 d-inline-block  es-shop-btn">
                Shop Now
                <span className="ms-2 icon-arrow-right d-inline-block"></span>
              </a>
            </div>
            <div className="hero-section-wrapper-img d-flex align-items-center">
                <Image className="img-fluid" src={HeroImg3} />
            </div>
          </div>
        </Slider>
        <div className="bg-primary rounded-1 text-white es-hero-service">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <FreeShipping />
                <div>
                  <h5 className="fw-bold m-0">Free Shipping</h5>
                  <p className="m-0">When ordering over $100</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <FreeReturn />
                <div>
                  <h5 className="fw-bold m-0">Free Return</h5>
                  <p className="m-0">When ordering over $100</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <SecurePayment />
                <div>
                  <h5 className="fw-bold m-0">Secure Payment</h5>
                  <p className="m-0">When ordering over $100</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <BestQuality />
                <div>
                  <h5 className="fw-bold m-0">Best Quality</h5>
                  <p className="m-0">When ordering over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
