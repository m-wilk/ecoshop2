import SectionTitle from "../../molecules/section-title/SectionTitle";
import BaseProductIten from "../../molecules/base-product-item/BaseProductItem";
import ProductCategoryBanner from "../../molecules/product-category-banner/ProductCategoryBanner";
import ScrollReveal from "../../molecules/scroll-reveal/ScrollReveal";

const TopSellingProducts = () => {
  return (
    <div className="pt-5 pb-5 container">
      <SectionTitle title={"Top Selling Prodcuts"} />
      <ScrollReveal>
        <div className="row mb-4">
          <div className="col-lg-4 col-sm-6">
            <BaseProductIten isHorizontal={true} />
          </div>
          <div className="col-lg-4 col-sm-6">
            <BaseProductIten isHorizontal={true} />
          </div>
          <div className="col-lg-4 col-sm-6">
            <BaseProductIten isHorizontal={true} />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <BaseProductIten isHorizontal={true} />
          </div>
          <div className="col-lg-4 col-sm-6">
            <BaseProductIten isHorizontal={true} />
          </div>
          <div className="col-lg-4 col-sm-6">
            <BaseProductIten isHorizontal={true} />
          </div>
        </div>
      </ScrollReveal>
      <div className="pt-5 row">
        <div className="col-md-6">
          <ProductCategoryBanner
            className="product-wrapper-bg-pink"
            title={
              <>
                The 14 Most Nutrient-
                <br />
                Dense Vegetables
              </>
            }
            linkClassName="bg-warning"
          />
        </div>
        <div className="col-md-6">
          <ProductCategoryBanner
            className="product-wrapper-bg-green"
            title={
              <>
                Healthy & Goods
                <br />
                Fruits
              </>
            }
            linkClassName="bg-primary text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;

