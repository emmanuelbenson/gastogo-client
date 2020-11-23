import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-bar">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="text-sm-left">
              <p className="mb-0">© 2019-20 Gas To Go</p>
            </div>
          </div>

          <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul className="list-unstyled text-sm-right mb-0">
              <li className="list-inline-item">
                <Link to="">
                  <img
                    src="images/payments/american-ex.png"
                    className="avatar avatar-ex-sm"
                    title="American Express"
                    alt=""
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="">
                  <img
                    src="images/payments/discover.png"
                    className="avatar avatar-ex-sm"
                    title="Discover"
                    alt=""
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="">
                  <img
                    src="images/payments/master-card.png"
                    className="avatar avatar-ex-sm"
                    title="Master Card"
                    alt=""
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="">
                  <img
                    src="images/payments/paypal.png"
                    className="avatar avatar-ex-sm"
                    title="Paypal"
                    alt=""
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="">
                  <img
                    src="images/payments/visa.png"
                    className="avatar avatar-ex-sm"
                    title="Visa"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
