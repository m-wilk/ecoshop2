import Select from "react-select";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as CartIconCompare } from "../../../assets/img/compaire.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const HeaderCenterSectionWtyczka = () => {
  //pobieranie danych z serwera
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/categories/")
      .then((respons) => {
        setCategories(respons.data);
        console.log(respons.data);
      });
  }, []);

  const categoriesOptions = categories.map((categorie) => {
    return {value: categorie.id, label: categorie.name} 
  })
  console.log(categoriesOptions)

  //wybranie kategorji z select
  const [selectedCategory, setSelectedCategory] = useState();

  return (
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

        <Select
          value={selectedCategory}
          onChange={(value) => {setSelectedCategory(value)}}
          options={categoriesOptions}
          placeholder="All Categories"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
              width: "270px",
              boxShadow: "none",
            }),
            placeholder:  (baseStyles, state) => {
              return {
                ...baseStyles,
                color: "#707070"
              }
            },

            option: (baseStyles, state) => {
              return {
                ...baseStyles,
                background: "white",
                "&:hover": {
                  background: "#b7b7b7",
                  color: "#fff",
                },
                "&:focus": {
                  background: "#fff",
                },
              };
            },
          }}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => (
              <div className="pe-3">
                <ArrowDownIcon />
              </div>
            ),
          }}
        />

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

export default HeaderCenterSectionWtyczka;
