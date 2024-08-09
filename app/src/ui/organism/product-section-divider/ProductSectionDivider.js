import SectionTitle from "../../molecules/section-title/SectionTitle";
import BaseProductItem from "../../molecules/base-product-item/BaseProductItem";
import ScrollReveal from "../../molecules/scroll-reveal/ScrollReveal";

const ProductSectionDivider = ({ title }) => (
  <div className="pt-5 pb-5 es-product-background">
    <div className="container">
      <SectionTitle title={title} />
      <ScrollReveal>
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
      </ScrollReveal>
    </div>
  </div>
);

export default ProductSectionDivider;
