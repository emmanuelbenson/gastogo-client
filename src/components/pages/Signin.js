import { Fragment } from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import Joi from "joi-browser";

class Signin extends Form {
  state = {
    data: {
      password: "",
      phoneNumber: "",
    },
    errors: {},
  };

  schema = {
    phoneNumber: Joi.number().required().label("Phone Number"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call server
    console.log("Submitted");
  };

  render() {
    return (
      <Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i data-feather="home" className="uil uil-home"></i>
          </Link>
        </div>

        <section className="bg-home d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="mr-lg-5">
                  <img
                    src="images/user/login.svg"
                    className="img-fluid d-block mx-auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="card login-page bg-white shadow rounded border-0">
                  <div className="card-body">
                    <h4 className="card-title text-center">Login</h4>
                    <form className="login-form mt-4">
                      <div className="row">
                        <div className="col-lg-12">
                          {this.renderInput(
                            "phoneNumber",
                            "Phone Number",
                            "number"
                          )}
                        </div>

                        <div className="col-lg-12">
                          {this.renderInput("password", "Password", "password")}
                        </div>

                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between">
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
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <p className="forgot-pass mb-0">
                              <Link
                                to="/reset-password"
                                className="text-dark font-weight-bold"
                              >
                                Forgot password ?
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-0">
                          {this.renderButton("Sign In")}
                        </div>
                        <div className="col-12 text-center">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-2">
                              Don't have an account ?
                            </small>{" "}
                            <Link
                              to="/sign-up"
                              className="text-dark font-weight-bold"
                            >
                              Sign Up
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Signin;
