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
import ModernGroceryBanner from "../organism/modern-grocery-banner/ModernGroceryBanner"; 
import PopularSales from "../organism/popular-sales/PopularSales";
import Newsletter from "../organism/newsletter/Newsletter";
import Footer from "../organism/footer/Footer";



const Main = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSectionWtyczka />
      <HeaderBottomSectionWtyczka />
      <HeroSection />
      <ProductCategory />
      <ProductSectionDivider title="Fresh Vegetables" background="es-product-background"/>
      <FleshSale />
      <TopSellingProducts />
      <ProductSectionDivider title="Drinks Juice" background="es-product-background"/>
      <BestProduct />
      <ProductSectionDivider title="New Arrivals" background="es-product-background"/>
      <ModernGroceryBanner background="es-product-background"/>
      <PopularSales />
      <Newsletter />
      <Footer />
      {/* <HeaderBottomSection /> */}
      {/* <HeaderBottomSection /> */}
      {/* <HeaderCenterSection /> */}
      {/* <p>Router</p>
        <p>footer</p> */}
    </>
  );
};

export default Main;
