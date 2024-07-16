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

  const categoriesOptions = categories.map((categorie) => {
    return { value: categorie.id, label: categorie.name };
  });
  console.log(categoriesOptions);

  //wybranie kategorji z select
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="d-flex container justify-content-between align-items-center pt-4 pb-4">
      <a href="#">
        <Image src={Logo} alt="Logo" />
      </a>
      <SearchCategoriesProduct
        selectedCategory={selectedCategory}
        categoriesOptions={categoriesOptions}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="d-flex align-items-center gap-3">
        <Badge className="icon-compaire" />
        <a href="#" className="nav-link">
          <Badge className="icon-wishlist" />
        </a>
        <a href="#" className="nav-link">
          <Badge className="icon-cart"/>
        </a>
        <a href="#" className="nav-link">
          <span className="icon-user-profile"></span>
        </a>
      </div>
    </div>
  );
};

export default HeaderCenterSectionWtyczka;
