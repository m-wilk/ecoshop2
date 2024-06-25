import { ReactComponent as Phone } from "../../../assets/img/phone.svg";
import { ReactComponent as Email } from "../../../assets/img/email.svg";

const HeaderTop = () => {
  return (
    <div className="es-header-top-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a className="text-decoration-none text-black" href="#">
              <span>Account</span>
            </a>
            <a className="text-decoration-none text-black" href="#">
              <span>Track Order</span>
            </a>
            <a className="text-decoration-none text-black" href="#">
              <span>Support</span>
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a className="d-flex justify-content-center align-items-center gap-2 text-decoration-none text-black" href="#">
              <Phone />
              <span>+00645 4568</span>
            </a>
            <div className="es-divider"></div>
            <a className="d-flex justify-content-center align-items-center gap-2 text-decoration-none text-black" href="#">
              <Email />
              <span>+00645 4568</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
