import CustomLink from "../../atoms/custom-link/CustomLink";


const SidebarShop = () => {
  return (
    <div className="mt-3 p-4 es-sidebar-shop-bg">
      <span className="text-white">TRENDY</span>
      <h2 className="text-white fw-bold mt-2">Best wireless Shoes</h2>
      <CustomLink className="mt-5 mb-5 fw-bold text-white" isArrow={true}  animationClassName="es-underline-animation" >Shop Now</CustomLink>
    </div>
  );
};

export default SidebarShop;
