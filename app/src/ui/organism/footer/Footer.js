import Image from "../../atoms/imagine/Image";
import LogoFooter from "../../../assets/img/footer-logo.png";
import List from "../../molecules/list/List";
import PaymentImg from "../../../assets/img/payment-img.png";

const data = [
  {
    link: "/track-order",
    text: "Track Order",
  },
  {
    link: "/delivery-returns",
    text: "Delivery & Returns",
  },
  {
    link: "/warranty",
    text: "Warranty",
  },
].map(({ link, text }) => (
  <a className="text-decoration-none text-secondary" href={link}>
    {text}
  </a>
));

const data1 = [
  {
    link: "/track-order",
    text: "Rave’s Story",
  },
  {
    link: "/delivery-returns",
    text: "Work With Us",
  },
  {
    link: "/delivery-returns",
    text: "Coporate News",
  },
  {
    link: "/warranty",
    text: "Investors",
  },
].map(({ link, text }) => (
  <a className="text-decoration-none text-secondary" href={link}>
    {text}
  </a>
));

const data2 = [
  {
    link: "/track-order",
    text: "Secure Payment",
  },
  {
    link: "/delivery-returns",
    text: "Privacy Policy",
  },
  {
    link: "/warranty",
    text: "Terms of Use",
  },
  {
    link: "/warranty",
    text: "Archived Products",
  },
].map(({ link, text }) => (
  <a className="text-decoration-none text-secondary" href={link}>
    {text}
  </a>
));

const Footer = () => {
  return (
    <div className="bg-black pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <Image className="mb-5" src={LogoFooter} />
            <List items={data} />
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="text-white fw-bold mb-3">About Us</h4>
            <List items={data1} />
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="text-white fw-bold mb-3">Useful Links</h4>
            <List items={data2} />
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="text-white fw-bold mb-3">Contact Info</h4>
            <div className="d-flex align-items-start gap-4">
              <div className="d-flex justify-content-center align-items-center border rounded-circle es-size-box-45px">
                <span className="icon-location text-white"></span>
              </div>
              <div>
                <h4 className="text-white fw-bold">Phone:</h4>
                <p className="text-white">+880171889547</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-4">
              <div className="d-flex justify-content-center align-items-center border rounded-circle es-size-box-45px">
                <span className="icon-phone1 text-white"></span>
              </div>
              <div>
                <h4 className="text-white fw-bold">Phone:</h4>
                <p className="text-white">+880171889547</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-4">
              <div className="d-flex justify-content-center align-items-center border rounded-circle es-size-box-45px">
                <span className="icon-envelop text-white"></span>
              </div>
              <div>
                <h4 className="text-white fw-bold">Email:</h4>
                <p className="text-white">Demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex pt-3 pb-4 align-items-center justify-content-between border-secondary border-top">
          <div className="d-flex justify-content-start align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <a className="text-decoration-none" href="#">
                <span className="icon-instagram text-secondary fw-bold"></span>
              </a>
              <a className="text-decoration-none" href="#">
                <span className="icon-facebook text-secondary fw-bold"></span>
              </a>
              <a className="text-decoration-none" href="#">
                <span className="icon-youtube text-secondary fw-bold"></span>
              </a>
            </div>
            <p className="text-secondary m-0 fw-bold">
              ©2024{" "}
              <a className="text-decoration-none fw-bold" href="#">
                {" "}
                Quomodosoft{" "}
              </a>
              All rights reserved
            </p>
          </div>

          <a className="text-decoration-none" href="#">
            <Image src={PaymentImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
