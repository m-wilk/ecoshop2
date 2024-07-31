import CustomLink from "../../atoms/custom-link/CustomLink";

const ProductCategoryBanner = ({className, title, linkClassName}) => {
  return (
    <div className={`${className} rounded-1 shadow-lg px-5 py-4`}>
      <span className="text-uppercase mb-2 d-block">frest vegetables</span>
      <h3 className="league-spartan-bold es-h-3">
        {title} 
      </h3>
      <CustomLink className={`${linkClassName} mt-5`} isArrow={true}>Shop Now</CustomLink>
    </div>
  );
};

export default ProductCategoryBanner;
