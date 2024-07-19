import Image from "../../atoms/imagine/Image";
import Category1 from "../../../assets/img/c-img-1.png";
import CustomLink from "../../atoms/custom-link/CustomLink";
import CateroryShop1 from "../../../assets/img/c-shop-img-1.png";

const ProductCategory = () => {
  return (
    <div className="product-category-section">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3 className="fw-bold es-h3-xl">Market Category</h3>
          <a
            className="text-decoration-none text-black fw-bold position-relative es-underline-hover"
            href="#"
          >
            View All
          </a>
        </div>
        <div className="category-section">
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center rounded-2 w-100 es-h-9 border border-1 es-wrapper-img">
              <Image className="img-fluid" src={Category1} />
            </div>
            <a
              href="#"
              className="text-secondary text-decoration-none es-fs-inscription"
            >
              Fruits
            </a>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center rounded-2 w-100 es-h-9 border border-1 es-wrapper-img">
              <Image className="img-fluid" src={Category1} />
            </div>
            <a
              href="#"
              className="text-secondary text-decoration-none es-fs-inscription"
            >
              Fruits
            </a>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center rounded-2 w-100 es-h-9 border border-1 es-wrapper-img">
              <Image className="img-fluid" src={Category1} />
            </div>
            <a
              href="#"
              className="text-secondary text-decoration-none es-fs-inscription"
            >
              Fruits
            </a>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center rounded-2 w-100 es-h-9 border border-1 es-wrapper-img">
              <Image className="img-fluid" src={Category1} />
            </div>
            <a
              href="#"
              className="text-secondary text-decoration-none es-fs-inscription"
            >
              Fruits
            </a>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center rounded-2 w-100 es-h-9 border border-1 es-wrapper-img">
              <Image className="img-fluid" src={Category1} />
            </div>
            <a
              href="#"
              className="text-secondary text-decoration-none es-fs-inscription"
            >
              Fruits
            </a>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center rounded-2 w-100 es-h-9 border border-1 es-wrapper-img">
              <Image className="img-fluid" src={Category1} />
            </div>
            <a
              href="#"
              className="text-secondary text-decoration-none es-fs-inscription"
            >
              Fruits
            </a>
          </div>
        </div>
        <div className="es-pt-6">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="es-product-wrapper">
                <div className="ps-4 pt-4">
                  <span className="text-uppercase d-block mb-2">Fruits</span>
                  <h2 className="fw-bold m-0 pb-3">
                    Healthy &amp; Goods <br /> Fruits
                  </h2>
                  <CustomLink className="bg-primary text-white" isArrow={true}>
                    Shop Now
                  </CustomLink>
                </div>
                <Image className="w-100" src={CateroryShop1} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="es-product-wrapper">
                <div className="ps-4 pt-4">
                  <span className="text-uppercase d-block mb-2">Fruits</span>
                  <h2 className="fw-bold m-0 pb-3">
                    Healthy &amp; Goods <br /> Fruits
                  </h2>
                  <CustomLink className="bg-primary text-white" isArrow={true}>
                    Shop Now
                  </CustomLink>
                </div>
                <Image className="w-100" src={CateroryShop1} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="es-product-wrapper">
                <div className="ps-4 pt-4">
                  <span className="text-uppercase d-block mb-2">Fruits</span>
                  <h2 className="fw-bold m-0 pb-3">
                    Healthy &amp; Goods <br /> Fruits
                  </h2>
                  <CustomLink className="bg-primary text-white" isArrow={true}>
                    Shop Now
                  </CustomLink>
                </div>
                <Image className="w-100" src={CateroryShop1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
