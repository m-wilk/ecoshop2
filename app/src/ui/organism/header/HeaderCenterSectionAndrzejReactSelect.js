import Select from "react-select";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as CartIconCompare } from "../../../assets/img/compaire.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/img/arrow-down.svg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const HeaderCenterSectionAndrzej = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="d-flex container justify-content-between align-items-center pt-4 pb-4">
      <a href="#">
        <img src={Logo} />
      </a>

      <form className="d-flex border align-items-center rounded-3">
        <input
          type="text"
          className="form-control border-0 input-reset es-header-search-input"
          placeholder="Search Product...."
        />

        <div className="es-divider"></div>

        <Select
          value={"chocolate"}
          onChange={handleChange}
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
              width: "270px",
              boxShadow: "none",
            }),
          }}
          autoFocus={false}
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

export default HeaderCenterSectionAndrzej;
