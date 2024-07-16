import { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";
import { ReactComponent as ToogleMenuIcon } from "../../../assets/img/toogle-menu.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/img/arrow-right.svg";

const HeaderBottomSection = () => {
  //rozwijanie listy
  const [visible, setVisible] = useState(false);
  const popUp = visible ? "" : "visually-hidden";
  //pobieranie danych z servera
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/categories/")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      {visible ? (
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="position-absolute top-0 start-0 w-100 h-100 opacity-0 z-2"
        ></div>
      ) : null}

      <div className="bg-primary es-header-bottom-section pt-3 pb-3">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center gap-4">
              <div
                onClick={() => {
                  setVisible(!visible);
                }}
                className="d-flex align-items-center justify-content-between bg-white px-3 py-3 rounded-top  position-relative "
              >
                <div>
                  <ToogleMenuIcon />
                  <input
                    className="input-reset border-0 ms-2"
                    value={"All Category"}
                  />
                </div>
                <ArrowDownIcon />
                <ul
                  className={`nav d-flex flex-column  w-100 position-absolute bg-white es-header-menu-dropdown-list z-3 ${popUp}`}
                >
                  {categories.map((categorie) => {
                    return (
                      <li
                        key={categorie.id}
                        className="nav-item d-flex align-items-center justify-content-between pe-3"
                      >
                        <div className="d-flex align-items-center">
                          <i className="es-anchor es-icon ms-3"></i>
                          <a href="#" className="nav-link">
                            {categorie.name}
                          </a>
                        </div>
                        <ArrowRightIcon className="fill-white-icon" />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    User Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white fw-bold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a className="text-decoration-none rounded d-inline-block  es-shop-btn">
              Seller Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottomSection;
