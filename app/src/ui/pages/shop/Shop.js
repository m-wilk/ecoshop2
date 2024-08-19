import List from "../../molecules/list/List";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import SidebarShop from "../../molecules/sidebar-shop/SidebarShop";
import { useEffect } from "react";
import axios from "axios";
import Select, { components } from "react-select";
import BaseProductItem from "../../molecules/base-product-item/BaseProductItem";
import ShopBanner from "../../organism/shop-banner/ShopBanner";


const dataFromBackend = [
  {
    id: 1,
    name: "Vegrtable",
  },
  {
    id: 2,
    name: "Friuts",
  },
  {
    id: 3,
    name: "Other Food",
  },
  {
    id: 4,
    name: "Vegrtable",
  },
  {
    id: 5,
    name: "Friuts",
  },
  {
    id: 6,
    name: "Other Food",
  },
  {
    id: 4,
    name: "Vegrtable",
  },
  {
    id: 5,
    name: "Friuts",
  },
  {
    id: 6,
    name: "Other Food",
  },
].map(({ name }) => (
  <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input border-black"
        type="checkbox"
        value=""
      />
      {name}
    </label>
  </div>
));

const Shop = (props) => {
  const [values, setValues] = useState([0, 100]);
  const [fromValue, toValue] = values;

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
  // const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="pt-5 pb-5 container">
      <div className="row">
        <div className="col-lg-3">
          <div className="rounded-1 shadow-lg px-3 py-4">
            <h4 className="mb-4">Product Category</h4>
            <List items={dataFromBackend} liClassName="mb-5" />
            <hr className="mt-5 mb-5 border-primary" />

            <div className="px-2">
              <Range
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => {
                  return (
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: 0,
                          max: 100,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  );
                }}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    key={props.key}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      border: "1px solid #444",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              />
            </div>
            <p className="pt-3">
              Price: ${fromValue}- $ {toValue}
            </p>
            <hr className="mt-5 mb-5 border-primary" />
            <h4 className="mb-4">Brands</h4>
            <List items={dataFromBackend} liClassName="mb-5" />
            <h4 className="mb-4">Weight</h4>
            <List items={dataFromBackend} liClassName="mb-5" />
          </div>
          <SidebarShop />
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center shadow-lg p-4 rounded-1">
                <span>Showing 1–16 of 66 results</span>
                <div className="d-flex  align-items-center gap-2">
                  <span>Sort by:</span>
                  <div>
                    <Select
                      options={categoriesOptions}
                      // onChange={(option) => {
                      //   setSelectedCategory(option);
                      // }}
                      placeholder="Default"
                      styles={{
                        placeholder: (baseStyles) => ({
                          ...baseStyles,
                          color: "black",
                        }),
                        control: (baseStyles) => ({
                          ...baseStyles,
                          border: "none",
                          width: "120px",
                          boxShadow: "none",
                          // padding: "10px",
                        }),
                        menu: (baseStyles) => ({
                          ...baseStyles,
                          boxShadow:
                            " 1px 0px 12px -5px rgba(184, 184, 191, 1)",
                          top: "60px",
                        }),
                        menuList: (baseStyles) => ({
                          ...baseStyles,
                          padding: "0",
                          boxShadow: "none",
                        }),
                        option: (baseStyles) => ({
                          ...baseStyles,
                          padding: "10px",
                          background: "white",
                          color: "black",
                          "&:hover": {
                            background: "#f0f0f0",
                            fontWeight: "bold",
                          },
                        }),
                      }}
                      components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator: () => (
                          <span className="icon-arrow-down es-fs-07 me-2"></span>
                        ),
                        // Control: (props) => {
                        //   console.log(props);
                        //   return (
                        //     <components.Control {...props}>

                        //       {props.children}
                        //     </components.Control>
                        //   );
                        // },
                        Option: (props) => {
                          return (
                            <components.Option {...props}>
                              <div className="nav-item d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <a href="#" className="nav-link">
                                    {props.label}
                                  </a>
                                </div>
                              </div>
                            </components.Option>
                          );
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
            <ShopBanner />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
            <div className="col-xl-4 col-sm-6">
              <BaseProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
