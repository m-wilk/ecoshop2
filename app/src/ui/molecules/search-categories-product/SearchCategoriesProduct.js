import Select from "react-select";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";


const SearchCategoriesProduct = (props) => {
    return(
        <form className="d-flex border border-primary align-items-center rounded-3">
        <Input className="es-search-input" placeholder="Search Product...." />
        <div className="es-divider"></div>
        <Select
          value={props.selectedCategory}
          onChange={(value) => {
            props.setSelectedCategory(value);
          }}
          options={props.categoriesOptions}
          placeholder="All Categories"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
              width: "270px",
              boxShadow: "none",
            }),
            placeholder: (baseStyles, state) => {
              return {
                ...baseStyles,
                color: "#707070",
              };
            },

            option: (baseStyles, state) => {
              return {
                ...baseStyles,
                background: "white",
                color: "black",
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
                <span className="icon-arrow-down"></span>
              </div>
            ),
          }}
        />
        <Button className="btn-primary text-white rounded-start-0" type="submit">Search</Button>
      </form>
    );
}

export default SearchCategoriesProduct;