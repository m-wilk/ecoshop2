import HeaderTopSection from "../organism/header/HeaderTopSection";
import HeaderCenterSection from "../organism/header/HeaderCenterSection";
import HeaderCenterSectionWtyczka from "../organism/header/HeaderCenterSectionWtyczka";
import HeaderBottomSection from "../organism/header/HeaderBottomSection";
import HeaderBottomSectionWtyczka from "../organism/header/HeaderBottomSectionWtyczka";
import HeroSection from "../organism/hero-section/HeroSection";
import ProductCategory from "../organism/product-category/ProductCategory";
import ProductFresh from "../organism/product-fresh/ProductFresh";


const Main = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSectionWtyczka />
      <HeaderBottomSectionWtyczka />
      <HeroSection />
      <ProductCategory />
      <ProductFresh />
      {/* <HeaderBottomSection /> */}
      {/* <HeaderBottomSection /> */}
      {/* <HeaderCenterSection /> */}
      {/* <p>Router</p>
        <p>footer</p> */}
    </>
  );
};

export default Main;
