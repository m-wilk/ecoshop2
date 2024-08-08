import Image from "../../../ui/atoms/imagine/Image";
import Tomatos from "../../../assets/img/p-img-1.png";

const BaseProductItem = ({isHorizontal=false}) => {
  return (
    <div className={`pb-3 rounded-1 shadow-lg bg-white position-relative es-product-base-item-wrapper ${isHorizontal ? "d-flex es-horizontal": ""}`}>
      <div className="d-flex justify-content-center align-items-center pt-4 pb-4">
        <Image src={Tomatos} className="img-fluid"/>
        <div className="d-flex flex-column gap-3 es-product-cart-hiden-link">
          <a
            href="#"
            className="nav-link rounded es-bg-green-300 p-2 es-hover-green"
          >
            <span className="icon-wishlist es-fs-13"></span>
          </a>
          <a
            href="#"
            className="nav-link rounded es-bg-green-300 p-2 es-hover-green"
          >
            <span className="icon-wishlist es-fs-13"></span>
          </a>
          <a
            href="#"
            className="nav-link rounded es-bg-green-300 p-2 es-hover-green"
          >
            <span className="icon-wishlist es-fs-13"></span>
          </a>
        </div>
      </div>
      <div className={`${isHorizontal ? "" : "d-flex flex-column align-items-center"}  pb-3 ps-3 pe-3`}>
        <div className="mb-2 mt-2">
          <span className="icon-star-full text-warning"></span>
          <span className="icon-star-full text-warning"></span>
          <span className="icon-star-full text-warning"></span>
          <span className="icon-star-full text-warning"></span>
          <span className="icon-star-full text-warning"></span>
        </div>
        <a className="text-decoration-none text-black h4 fw-bold m-0" href="#">
          Fresh Red Tomatos
        </a>
        <div className="d-flex justify-content-center align-items-center gap-2 mt-3 mb-3">
          <span className="text-secondary fw-bold text-decoration-line-through fs-5">
            $12.99
          </span>
          <span className="text-danger fw-bold fs-5">$6.99</span>
        </div>
        <a
          className="d-flex justify-content-center align-items-center gap-2 text-decoration-none fw-semibold pt-2 pb-2 es-bg-green-300 w-100 rounded-1 es-hover-green"
          href="#"
        >
          <span className="fs-4">+</span>
          <span>Add To Cart</span>
        </a>
      </div>
    </div>
  );
};

export default BaseProductItem;
