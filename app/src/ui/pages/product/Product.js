import Bredcrumb from "../../molecules/breadcrumb/Breadcrumb";
import Slider from "react-slick";
import ProductSlider1 from "../../../assets/img/p-img-37.png";
import ProductSlider2 from "../../../assets/img/p-img-38.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import Modal from "react-modal";

const BreadcrumbsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Shop",
    url: "/shop",
  },
  {
    name: "Product Detail",
    url: null,
  },
];

const backendProductImages = [ProductSlider1, ProductSlider2];

const settings = {
  customPaging: function (i) {
    return (
      <div className="border p-4">
        <a>
          <img className="es-w-50px" src={backendProductImages[i]} />
        </a>
      </div>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb es-dots-slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "80px",
  },
};

const Product = () => {
  const { id } = useParams();
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
  const [selectedWeight, setSelectedWeight] = useState();
  const [quantity, setQuantity] = useState(1);
  const onAddToCartHandler = () => {
    console.log(id, selectedWeight, quantity);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <Bredcrumb items={BreadcrumbsData} />
        <div className="row">
          <div className="col-md-6">
            <div className="slider-container">
              <Slider {...settings}>
                {backendProductImages.map((image) => {
                  return (
                    <div className="position-relative mt-5 mb-5 border pt-5 pb-5">
                      <img className="img-fluid" src={image} />
                      <div className="bg-warning rounded-circle position-absolute top-0 start-0 es-circle-small mt-3 ms-3 d-flex justify-content-center align-items-center fw-bold">
                        <h4 className="m-0">-50%</h4>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="col-md-6 mt-5 mb-5">
            <span>VEGETABLE</span>
            <h3 className="mt-2 mb-2">Eggplant fruit Leucinodes orbonalis</h3>
            <span className="me-2">
              <span className="icon-star-full text-warning"></span>
              <span className="icon-star-full text-warning"></span>
              <span className="icon-star-full text-warning"></span>
              <span className="icon-star-full text-warning"></span>
              <span className="icon-star-full text-warning"></span>
            </span>
            <span>6 reviews</span>
            <div className="d-flex justify-content-start align-items-center gap-2 mt-2 mb-2">
              <span className="text-secondary fw-bold text-decoration-line-through fs-5">
                $12.99
              </span>
              <span className="text-danger fw-bold fs-5">$6.99</span>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable there content of a page.
            </p>
            <div className="bg-info p-2 w-50 rounded-4">
              <span className="fw-bold">Availabillity :</span>
              <span className="text-primary fw-bold">
                132 Products Available
              </span>
            </div>
            <div className="mt-4">
              <p className="text-primary">Weight</p>

              <Select
                // defaultMenuIsOpen={false}
                value={selectedWeight}
                onChange={(value) => {
                  setSelectedWeight(value);
                }}
                placeholder="Select Weight"
                options={categoriesOptions}
                styles={{
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "black",
                  }),
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "1px solid black",
                    boxShadow: "none",
                    padding: "10px",
                    "&:hover": {
                      borderColor: "black",
                    },
                  }),
                  option: (baseStyles) => ({
                    ...baseStyles,
                    padding: "10px",
                    background: "white",
                    color: "black",
                    "&:hover": {
                      background: "green",
                      color: "#fff",
                    },
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0",
                    boxShadow: "none",
                    border: "1px solid black",
                    borderRadius: "4px",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    boxShadow: "none",
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => (
                    <span className="icon-arrow-down es-fs-07 me-2"></span>
                  ),
                }}
              />
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="d-flex justify-content-between align-items-center w-25  border border-primary rounded p-3">
                  <span
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    -
                  </span>
                  <span>{quantity}</span>
                  <span
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </span>
                </div>
                <div className="d-flex justify-content-center align-items-center border border-primary rounded p-3">
                  <span className="icon-wishlist fs-4"></span>
                </div>
                <button
                  onClick={onAddToCartHandler}
                  className="btn  w-50 bg-primary p-3"
                >
                  <span className="icon-plus text-white me-3"></span>
                  <span className="text-white fw-bold">Add to Cart</span>
                </button>
              </div>
              <div className="mt-5">
                <p>
                  Category: <span className="text-primary">Kitchen</span>
                </p>
                <p>
                  Tags: <span className="text-primary">Beer, Foamer</span>
                </p>
                <p>
                  SKU: <span className="text-primary">E-91039</span>
                </p>
              </div>
              <button onClick={openModal}>
                <span className="icon-star-full text-danger me-2"></span>
                <span className="text-danger fw-bold">Report This Item</span>
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2>Report Products</h2>
                <button className="btn position-absolute top-0 end-0 rounded-circle bg-danger es-size-box-45px" onClick={closeModal}><span className="icon-plus text-white"></span></button>
                <form>
                  <div className="d-flex flex-column mb-3">
                    <label> Enter Report Ttile* </label>
                    <input placeholder="Raports Headline here" />
                  </div>
                  <div className="d-flex flex-column">
                    <label> Enter Report Ttile* </label>
                    <textarea  placeholder="Type here"></textarea>
                  </div>
                </form>
                <button className="btn bg-primary text-white fw-bold px-4 py-3 w-100 mt-4">Submit Raport</button>
              </Modal>
              <div className="d-flex align-items-center justify-content-start gap-2 mt-3">
                <p className="m-0">Shere This:</p>
                <div className="d-flex align-items-center gap-3">
                  <span className="icon-facebook"></span>
                  <span className="icon-instagram"></span>
                  <span className="icon-youtube"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
