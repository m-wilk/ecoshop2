import SectionTitle from "../../molecules/section-title/SectionTitle";
import BaseProductItem from "../../molecules/base-product-item/BaseProductItem";

const ProductFresh = () => {
  return (
    <div className="es-product-fresh pt-5 pb-5">
      <div className="container">
        <SectionTitle title="Fresh Vegetables" />
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <BaseProductItem />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <BaseProductItem />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <BaseProductItem />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <BaseProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFresh;
