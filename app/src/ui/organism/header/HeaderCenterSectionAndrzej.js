import Logo from "../../../assets/img/logo.png";
import { ReactComponent as CartIconCompare } from "../../../assets/img/compaire.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";

const HeaderCenterSectionAndrzej = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="d-flex container justify-content-between align-items-center pt-4 pb-4">
      <a href="#">
        <img src={Logo} />
      </a>

      <form className="d-flex border align-items-center rounded-3">
        <input
          type="text"
          className="form-control border-0 input-reset es-header-search-input"
          placeholder="Search Product...."
        />

        <div className="es-divider"></div>

        <div className="d-flex ps-3 position-relative align-items-center button-reset justify-content-between es-header-search-select pe-3">
          <span className="text-secondary me-5">All Categories</span>
          <ArrowDownIcon />
          <ul className="nav d-flex w-100 flex-column bg-white position-absolute border rounded-3 es-header-search-dropdown-list">
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black">
                Vegetable
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black">Fruits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black">Juice</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black">Meat</a>
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
  );
};

export default HeaderCenterSectionAndrzej;
