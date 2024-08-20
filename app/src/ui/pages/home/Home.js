
import HeroSection from "../../organism/hero-section/HeroSection";
import ProductCategory from "../../organism/product-category/ProductCategory";
import ProductSectionDivider from "../../organism/product-section-divider/ProductSectionDivider";
import FleshSale from "../../organism/flesh-sale/FleshSale";
import TopSellingProducts from "../../organism/top-selling-products/TopSellingProducts";
import BestProduct from "../../organism/best-product/BestProduct";
import ModernGroceryBanner from "../../organism/modern-grocery-banner/ModernGroceryBanner";
import PopularSales from "../../organism/popular-sales/PopularSales";


const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCategory />
      <ProductSectionDivider title="Fresh Vegetables" />
      <FleshSale />
      <TopSellingProducts />
      <ProductSectionDivider title="Drinks Juice" />
      <BestProduct />
      <ProductSectionDivider title="New Arrivals" />
      <ModernGroceryBanner background="es-product-background" />
      <PopularSales />
    </>
  );
};

export default Home;
