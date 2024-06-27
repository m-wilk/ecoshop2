import Logo from "../../../assets/img/logo.png";
import { ReactComponent as CartIconCompare } from "../../../assets/img/compaire.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";

const HeaderCenterSection = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4 pb-4">
          <a href="#">
            <img src={Logo} />
          </a>

          <form className="d-flex align-items-center border border-primary rounded-3">
            <input
              type="text"
              className="form-control border-0 input-reset es-header-search-input"
              placeholder="Search Product...."
            />

            <div className="d-flex align-items-center position-relative">
              <div className="es-divider me-3"></div>
              <div className="d-flex align-items-center button-reset justify-content-between es-header-search-select me-3">
                <span className="text-secondary me-5">All Categories</span>
                <ArrowDownIcon />
              </div>
              <ul className="nav d-flex w-100 flex-column bg-white position-absolute border rounded-3  es-header-search-dropdown-list">
                <li className="nav-item">
                  <a className="nav-link text-decoration-none text-black">
                    Vegetable
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-decoration-none text-black">
                    Fruits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-decoration-none text-black">
                    Juice
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-decoration-none text-black">
                    Meat
                  </a>
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

          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <CartIconCompare />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <CartIconCompare />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <CartIconCompare />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link pe-0">
                <CartIconCompare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenterSection;
