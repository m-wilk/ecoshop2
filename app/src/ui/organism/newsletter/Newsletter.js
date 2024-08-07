const Newsletter = () => {
  return (
    <div className="bw-bg pb-5">
      <div className="d-flex align-items-center justify-content-center footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-7 text-white">
              <div className="d-flex flex-column align-items-center">
                <h3 className="es-h3-xl fw-bold m-0">
                  Get <span className="text-warning">20% </span>Off Discount
                  Coupon
                </h3>
                <p className="mt-2 mb-5 fw-bold">by Subscribe our Newsletter</p>
                <form className="d-flex w-75">
                  <div className="d-flex flex-1 align-items-center gap-2 bg-white px-3 py-3 rounded-start-2">
                    <span className="icon-email text-black"></span>
                    <input
                      className="text-uppercase form-control-plaintext p-0"
                      type="email"
                      placeholder="email adress"
                    />
                  </div>
                  <button
                    className="btn text-decoration-none bg-warning text-black px-3 py-3 rounded-0 rounded-end-2"
                    href="#"
                  >
                    Get the Coupon
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Newsletter;
