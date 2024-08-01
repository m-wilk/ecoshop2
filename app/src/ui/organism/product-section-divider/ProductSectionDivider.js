import SectionTitle from "../../molecules/section-title/SectionTitle";
import BaseProductItem from "../../molecules/base-product-item/BaseProductItem";

const ProductSectionDivider = ({title, background}) => (
  <div className={`pt-5 pb-5 ${background}`}>
    <div className="container">
      <SectionTitle title={title} />
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

export default ProductSectionDivider;
