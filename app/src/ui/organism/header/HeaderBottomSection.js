import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";
import { ReactComponent as ToogleMenuIcon } from "../../../assets/img/toogle-menu.svg";

const HeaderBottomSection = () => {
  return (
    <div className="bg-primary es-header-bottom-section pt-3 pb-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-center gap-4">
            <div className="d-flex align-items-center justify-content-between bg-white px-3 py-3 rounded-top es-header-menu-select">
              <div>
                <ToogleMenuIcon />
                <input
                  className="input-reset border-0 ms-2"
                  value={"All Category"}
                />
              </div>
              <ArrowDownIcon />
            </div>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">User Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold">Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-decoration-none rounded es-shop-btn">
            Seller Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomSection;
