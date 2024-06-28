import Logo from "../../../assets/img/logo.png";
import { ReactComponent as CartIconCompare } from "../../../assets/img/compaire.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";
import { useState, useEffect } from "react";


const HeaderCenterSection = () => {
  const [ visible, setVisible ] = useState(false);
  const popUp = visible ? "" : "visually-hidden";

  return (
    <>
    {visible ? ( <div onClick={() => {setVisible(false)}} className="position-absolute top-0 start-0 w-100 h-100 opacity-0 z-2"></div>) : null}
   
    <div className="d-flex container justify-content-between align-items-center pt-4 pb-4">
      <a href="#">
        <img src={Logo} />
      </a>

      <form className="d-flex border border-primary align-items-center rounded-3">
        <input
          type="text"
          className="form-control border-0 input-reset es-header-search-input"
          placeholder="Search Product...."
        />

        <div className="es-divider"></div>

        <div className="d-flex ps-3 position-relative align-items-center button-reset justify-content-between es-header-search-select pe-3"
        onClick={() => {setVisible(true);
        }}>
          <span className="text-secondary me-5">All Categories</span>
          <ArrowDownIcon />
          <ul className={`nav d-flex w-100 flex-column bg-white position-absolute border rounded-3 es-header-search-dropdown-list z-3 ${popUp}`}>
            <li className="nav-item">
              <a className="nav-link text-decoration-none">
                Vegetable
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none">Fruits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none">Juice</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none">Meat</a>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-primary text-white rounded-start-0"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="d-flex gap-4">
        <a href="#" className="nav-link">
          <CartIconCompare />
        </a>
        <a href="#" className="nav-link">
          <CartIconCompare />
        </a>
        <a href="#" className="nav-link">
          <CartIconCompare />
        </a>
        <a href="#" className="nav-link">
          <CartIconCompare />
        </a>
      </div>
    </div>
    </>
  );
};

export default HeaderCenterSection;
