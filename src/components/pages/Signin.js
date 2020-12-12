import { Fragment } from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import Joi from "joi-browser";
import {signin} from "../../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Constants from "../../constants/Constants";

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

  doSubmit = async () => {
    const {phoneNumber, password} = this.state.data;
    try {
      let response = await signin({phoneNumber, password});

      console.log(response)
    } catch(error) {
      if(!error.response) {
        toast.error(Constants.NETWORK_ERROR_MESSAGE);
      }

      if(error.response) {
        const { data, status } = error.response;

        if (status === 500 || status === 400) {
          toast.error("Something went wrong. Please, contact support");
        }

        if(status === 422) {
          toast.error("Please check the fields for error(s)");
          const errs = {};

          if(data.data.errors) {
            for (let item of data.data.errors) errs[item.param] = item.msg;
            this.setState({errors: errs || {}});
            for (let item of data.data) errs[item.param] = item.msg;
            this.setState({errors: errs || {}})
          }
        }

        if(status === 404) {
          toast.error(data.data[0].msg);
        }

        if(status === 401) {
          toast.error(data.message);

          setTimeout(() => {
            this.props.history.push(`/otp/verify?token_id=${data.tokenId}&phone_number=${data.phoneNumber}`)
          }, 5000);
        }
      }
    }
  };

  render() {
    return (
      <Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i data-feather="home" className="uil uil-home"></i>
          </Link>
        </div>
        <ToastContainer />

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
                    <form className="login-form mt-4" onSubmit={this.handleSubmit}>
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
