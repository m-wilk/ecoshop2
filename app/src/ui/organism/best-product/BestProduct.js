import CustomLink from "../../atoms/custom-link/CustomLink";

const BestProduct = () => {
  return (
    <div className="pt-5 pb-5 es-best-product-section-bg">
      <div className="text-center container">
        <h2 className="league-spartan-bold es-h-33">Get the best deal for Grocery</h2>
        <p >
          You get into the 2k+ best Products in Flash offer with as into the
          find to <br/> makein shaped sofa for sale.
        </p>
        <CustomLink className="bg-primary text-white" isArrow={true}>Shop Now</CustomLink>
      </div>
    </div>
  );
};

export default BestProduct;
