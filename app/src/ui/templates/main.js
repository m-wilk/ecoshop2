import HeaderTopSection from "../organism/header/HeaderTopSection";
import HeaderCenterSection from "../organism/header/HeaderCenterSection";
import HeaderCenterSectionWtyczka from "../organism/header/HeaderCenterSectionWtyczka";
import HeaderBottomSection from "../organism/header/HeaderBottomSection";
import HeaderBottomSectionWtyczka from "../organism/header/HeaderBottomSectionWtyczka";
import HeroSection from "../organism/hero-section/HeroSection";
import ProductCategory from "../organism/product-category/ProductCategory";
import ProductSectionDivider from "../organism/product-section-divider/ProductSectionDivider";
import FleshSale from "../organism/flesh-sale/FleshSale";
import TopSellingProducts from "../organism/top-selling-products/TopSellingProducts";
import BestProduct from "../organism/best-product/BestProduct";

const Main = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSectionWtyczka />
      <HeaderBottomSectionWtyczka />
      <HeroSection />
      <ProductCategory />
      <ProductSectionDivider title="Fresh Vegetables" />
      <FleshSale />
      <TopSellingProducts />
      <ProductSectionDivider title="Drinks Juice" />
      <BestProduct />
      <ProductSectionDivider title="New Arrivals" />
      {/* <HeaderBottomSection /> */}
      {/* <HeaderBottomSection /> */}
      {/* <HeaderCenterSection /> */}
      {/* <p>Router</p>
        <p>footer</p> */}
    </>
  );
};

export default Main;
