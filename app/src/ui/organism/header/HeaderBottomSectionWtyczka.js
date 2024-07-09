import { useEffect, useState } from "react";
import axios from "axios";
import Select, { components } from "react-select";

const HeaderBottomSectionWtyczka = () => {
  //pobieranie danych z serwera
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/categories/")
      .then((respons) => {
        setCategories(respons.data);
      });
  }, []);

  const categoriesOptions = categories.map((categorie) => {
    return { value: categorie.id, label: categorie.name };
  });

  //wybranie kategorji z select
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <>
      <div className="bg-primary es-header-bottom-section pt-3 pb-3">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center gap-4">
              <div className="d-flex align-items-center justify-content-between bg-white rounded-top  position-relative ">
                <Select
                  // defaultMenuIsOpen={false}
                  value={selectedCategory}
                  onChange={(value) => {
                    setSelectedCategory(value);
                  }}
                  placeholder="All Category"
                  options={categoriesOptions}
                  styles={{
                    placeholder: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),
                    control: (baseStyles) => ({
                      ...baseStyles,
                      border: "none",
                      width: "270px",
                      boxShadow: "none",
                      padding: "10px",
                    }),
                    option: (baseStyles) => ({
                      ...baseStyles,
                      padding: "10px",
                      background: "white",
                      "&:hover": {
                        background: "green",
                        color: "#fff",
                      },
                      "&:not(:last-child)": {
                        borderBottom: "1px solid black",
                      },
                    }),
                    menuList: (baseStyles) => ({
                      ...baseStyles,
                      padding: "0",
                      boxShadow: "none",
                    }),
                    menu: (baseStyles) => ({
                      ...baseStyles,
                      boxShadow: " 1px 0px 12px -5px rgba(184, 184, 191, 1)",
                    }),
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => (
                      <span className="icon-arrow-down me-2"></span>
                    ),
                    Control: (props) => {
                      console.log(props);
                      return (
                        <components.Control {...props}>
                          <span className="icon-toogle-menu ms-2 me-3"></span>
                          {props.children}
                        </components.Control>
                      );
                    },
                    Option: (props) => {
                      return (
                        <components.Option {...props}>
                          <div className="nav-item d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <span className="icon-anchor ms-2 me-3"></span>
                              <a href="#" className="nav-link">
                                {props.label}
                              </a>
                            </div>
                            <span className="icon-arrow-right me-2"></span>
                          </div>
                        </components.Option>
                      );
                    },
                  }}
                />
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
            <a href="#" className="text-decoration-none rounded es-shop-btn" >Seller Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottomSectionWtyczka;
