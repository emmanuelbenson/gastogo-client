import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-half-170 d-table w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="title-heading mt-4">
              <h1 className="display-4 font-weight-bold mb-3">
                Certified vendors <br />
                for your gas
              </h1>
              <p className="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <div className="subcribe-form mt-4 pt-2">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border bg-white rounded-pill"
                      required
                      placeholder="Email Address"
                    />
                    <button type="submit" className="btn btn-pills btn-primary">
                      Get Started
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            I Accept
                            <Link to="" className="text-primary">
                              Terms And Condition
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img src="images/creativity.jpg" width="480px" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
