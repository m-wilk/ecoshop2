import CustomLink from "../../atoms/custom-link/CustomLink";

const ModernGroceryBanner = ({background}) => {
    return(
        <div className={`pt-5 pb-5 ${background}`}>
             <div className="text-center container es-modern-grocery-banner-inner-bg pt-5">
                <h2 className="es-h-33 league-spartan-bold text-white m-0">Get the best deal for Modern Grocery</h2>
                <CustomLink className="bg-warning mt-4 mb-5" isArrow={true}>Shop Now</CustomLink>
             </div>
        </div>
       
    )
}

export default ModernGroceryBanner;