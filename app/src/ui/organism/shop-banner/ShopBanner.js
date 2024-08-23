import CustomLink from "../../atoms/custom-link/CustomLink";


const ShopBanner = () => {
  return (
    <div className= {`p-5 d-flex flex-column align-items-center justify-content-center gap-3`}>
      <h3 className="text-white fw-bold h1">Get the best deal for Grocery Items</h3>
      <CustomLink isArrow={true} className="bg-warning">
        Shop Now
      </CustomLink>
    </div>
  );
};

export default ShopBanner;
