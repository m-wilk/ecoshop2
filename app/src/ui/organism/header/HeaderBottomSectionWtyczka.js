import { useEffect, useState } from "react";
import axios from "axios";
import Select, { components } from "react-select";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";
import { ReactComponent as ToogleMenuIcon } from "../../../assets/img/toogle-menu.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/img/arrow-right.svg";

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
                  defaultMenuIsOpen={true}
                  value={selectedCategory}
                  onChange={(value) => {
                    console.log(value);
                    setSelectedCategory(value);
                  }}
                  placeholder="All Category"
                  options={categoriesOptions}
                  styles={{
                    placeholder: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "black",
                    }),
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: "none",
                      width: "270px",
                      boxShadow: "none",
                      padding: "10px",
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      padding: "10px",
                      // borderBottom: "1px solid grey",
                      background: "white",
                      "&:hover": {
                        background: "green",
                        color: "#fff",
                      },
                      "&:not(:last-child)": {
                        borderBottom: "1px solid black",
                      },
                    }),
                    menuList: (baseStyles, state) => ({
                      ...baseStyles,
                      padding: "0",
                    }),
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => (
                      <span className="icon-arrow-down me-2"></span>
                    ),
                    Control: (props) => {
                      return (
                        <components.Control {...props}>
                          <span className="icon-toogle-menu ms-2 me-3"></span>{" "}
                          {props.children}
                        </components.Control>
                      );
                    },
                    Option: (props) => {
                      console.log(props);
                      return (
                        <components.Option {...props}>
                          <div className="nav-item d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <span class="icon-anchor ms-2 me-3"></span>
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
            </div>
            <a className="text-decoration-none rounded es-shop-btn">
              Seller Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottomSectionWtyczka;
