import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <Link to="#" className="logo-footer">
              <img src="images/g2g-logo.png" height="44" alt="" />
            </Link>
            <p className="mt-4">
              Start working with Landrick that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
            <ul className="list-unstyled social-icon social mb-0 mt-4">
              <li className="list-inline-item">
                <Link to="" className="rounded">
                  <i
                    data-feather="facebook"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="rounded">
                  <i
                    data-feather="instagram"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="rounded">
                  <i
                    data-feather="twitter"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="rounded">
                  <i
                    data-feather="linkedin"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">Company</h4>
            <ul className="list-unstyled footer-list mt-4">
              <li>
                <Link to="page-aboutus.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> About us
                </Link>
              </li>
              <li>
                <Link to="page-services.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Services
                </Link>
              </li>
              <li>
                <Link to="page-team.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Team
                </Link>
              </li>
              <li>
                <Link to="page-pricing.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Pricing
                </Link>
              </li>
              <li>
                <Link to="page-work-modern.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Project
                </Link>
              </li>
              <li>
                <Link to="page-jobs.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Careers
                </Link>
              </li>
              <li>
                <Link to="page-blog-grid.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Blog
                </Link>
              </li>
              <li>
                <Link to="auth-cover-login.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">Usefull Links</h4>
            <ul className="list-unstyled footer-list mt-4">
              <li>
                <Link to="page-terms.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Terms of
                  Services
                </Link>
              </li>
              <li>
                <Link to="page-privacy.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="documentation.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Documentation
                </Link>
              </li>
              <li>
                <Link to="changelog.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Changelog
                </Link>
              </li>
              <li>
                <Link to="components.html" className="text-foot">
                  <i className="mdi mdi-chevron-right mr-1"></i> Components
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">Newsletter</h4>
            <p className="mt-4">
              Sign up and receive the latest tips via email.
            </p>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="foot-subscribe form-group position-relative">
                    <label>
                      Write your email
                      <span className="text-danger">*</span>
                    </label>
                    <i data-feather="mail" className="fea icon-sm icons"></i>
                    <input
                      type="email"
                      name="email"
                      id="emailsubscribe"
                      className="form-control pl-5 rounded"
                      placeholder="Your email : "
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <input
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    className="btn btn-soft-primary btn-block"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
