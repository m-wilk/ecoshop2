import Image from "../../atoms/imagine/Image";
import HeroImg1 from "../../../assets/img/hero-img-1.png";
import HeroImg2 from "../../../assets/img/hero-img-2.png";
import HeroImg3 from "../../../assets/img/hero-img-3.png";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="hero-section">
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
              <div>
                <Image className="img-fluid" src={HeroImg1} />
              </div>
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
              <div>
                <Image className="img-fluid" src={HeroImg2} />
              </div>
            </div>
          </div>
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
              <div>
                <Image className="img-fluid" src={HeroImg3} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
