import Logo from "../../../assets/img/logo.png";
import { ReactComponent as CartIconCompare } from "../../../assets/img/compaire.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const HeaderCenterSection = () => {
  //rozwijanie listy
  const [visible, setVisible] = useState(false);
  const popUp = visible ? "" : "visually-hidden";

  //wybrana kategoria
  const [selectedCategory, setSelectedCategory] = useState({});

  // pobieranie danych z serwera
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/categories/")
      .then((respons) => {
        setCategories(respons.data);
        console.log(respons.data);
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

          <div
            className="d-flex ps-3 position-relative align-items-center button-reset justify-content-between es-w-250 pe-3"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <input
                className="text-secondary input-reset border-0"
                value={selectedCategory.name || "All Category"}
              />
              <ArrowDownIcon />
            </div>

            <ul
              className={`nav d-flex w-100 flex-column bg-white position-absolute border rounded-3  es-header-search-dropdown-list z-3 ${popUp}`}
            >
              {categories.map((categorie) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedCategory(categorie);
                    }}
                    key={categorie.id}
                    className="nav-item"
                  >
                    <a className="nav-link text-decoration-none">
                      {categorie.name}
                    </a>
                  </li>
                );
              })}
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
