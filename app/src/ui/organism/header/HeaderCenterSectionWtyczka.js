import Logo from "../../../assets/img/logo.png";
import Badge from "../../molecules/badge/Badge";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "../../atoms/imagine/Image";
import SearchCategoriesProduct from "../../molecules/search-categories-product/SearchCategoriesProduct";


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

  // zamiana formatu danych
  const categoriesOptions = categories.map((categorie) => {
    return { value: categorie.id, label: categorie.name };
  });

  return (
    <div className="d-flex container justify-content-between align-items-center pt-4 pb-4">
      <a href="#">
        <Image src={Logo} alt="Logo" />
      </a>
      <SearchCategoriesProduct
        categoriesOptions={categoriesOptions}
      />
      <div className="d-flex align-items-center gap-3">
        <Badge className="icon-compaire es-fs-13" />
        <Badge className="icon-wishlist es-fs-13" />
        <Badge className="icon-cart es-fs-13" />
        <span className="icon-user-profile es-fs-13"></span>
      </div>
    </div>
  );
};

export default HeaderCenterSectionWtyczka;
