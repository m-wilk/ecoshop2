import CustomLink from "../../atoms/custom-link/CustomLink";
import Countdown from "react-countdown";
import CountdownRenderer from "../../molecules/countdown-renderer/CountdownRenderer";

const FleshSale = () => {
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="es-flesh-sale-section rounded-1 position-relative bg-white">
          <div>
            <Countdown
              renderer={CountdownRenderer}
              date={Date.now() + 88400000}
            />
          </div>
          <div>
            <h2 className="league-spartan-bold es-h-4 m-0">WOO! Flash Sale</h2>
            <p className="m-0">
              You get into the 2k+ best Products in br Flash offer with as in
              <br /> shaped sofa for sale.
            </p>
            <CustomLink
              className="es-shop-btn bg-primary text-white mt-4"
              isArrow={true}
            >
              Shop Now
            </CustomLink>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center lh-sm rounded-circle bg-warning es-circle-big es-discount-item">
            <span className="fw-bold fs-1">26%</span>
            <span className="text-uppercase fs-3">off</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleshSale;
