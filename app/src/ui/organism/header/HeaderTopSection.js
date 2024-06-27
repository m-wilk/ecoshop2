import { ReactComponent as Phone } from "../../../assets/img/phone.svg";
import { ReactComponent as Email } from "../../../assets/img/email.svg";

const HeaderTopSection = () => {
  return (
    <div className="es-header-top-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black" href="#">
                Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black" href="#">
                Track Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-black" href="#">
                Suport
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <a className="nav-link text-decoration-none text-black me-2" href="#">
              <Phone className="me-2" />
              +00645 4568
            </a>
            <div className="es-divider"></div>
            <a className="nav-link text-decoration-none text-black ms-2" href="#">
              <Email className="me-2" />
              +00645 4568
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopSection;
