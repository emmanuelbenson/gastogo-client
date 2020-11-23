import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import Joi from "joi-browser";
import { register } from "../../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Constants from '../../constants/Constants';

class Signup extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      userType: "",
    },
    userTypes: ["buy gas", "sell gas"],
    errors: {},
  };

  schema = {
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    phoneNumber: Joi.number().required().label("Phone Number"),
    email: Joi.any().optional(),
    password: Joi.string().required().label("Password"),
    userType: Joi.string().required().label("Account Type"),
  };

  doSubmit = async () => {
    try {
      let response = await register(this.state.data);
      if (response.status === 201 || response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      if(!error.response) {
        toast.error(Constants.NETWORK_ERROR_MESSAGE);
      }

      if(error.response.status) {
        const { data, status } = error.response;

        if (status === 500 || status === 400) {
          toast.error("Something went wrong. Please, contact support");
        }else if(status === 422) {
          toast.error("Please check the fields for error(s)");
          const errs = {};

          if(data.data.errors) {
            for (let item of data.data.errors) errs[item.param] = item.msg;
            this.setState({errors: errs || {}})
          }else if(data.data) {
            for (let item of data.data) errs[item.param] = item.msg;
            this.setState({errors: errs || {}})
          }
        }
      }

    }
  };

  render() {
    return (
      <Fragment>
        <ToastContainer />
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
                    src="images/user/signup.svg"
                    className="img-fluid d-block mx-auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="card login_page shadow rounded border-0">
                  <div className="card-body">
                    <h4 className="card-title text-center">Signup</h4>
                    <form
                      className="login-form mt-4"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          {this.renderInput("firstName", "First Name")}
                        </div>
                        <div className="col-md-6">
                          {this.renderInput("lastName", "Last Name")}
                        </div>
                        <div className="col-md-12">
                          {this.renderInput(
                            "phoneNumber",
                            "Phone Number",
                            "number"
                          )}
                        </div>
                        <div className="col-md-12">
                          {this.renderSelect(
                            "What do you want to do?",
                            "userType"
                          )}
                        </div>
                        <div className="col-md-12">
                          {this.renderInput("password", "Password", "password")}
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <small className="text-dark mr-2">
                              By clicking on register, you accept our{" "}
                              <Link to="#" className="text-primary">
                                Terms And Condition
                              </Link>
                            </small>
                          </div>
                        </div>
                        <div className="col-md-12">
                          {this.renderButton("Register")}
                        </div>

                        <div className="mx-auto">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-2">
                              Already have an data ?
                            </small>{" "}
                            <Link
                              to="/sign-in"
                              className="text-dark font-weight-bold"
                            >
                              Sign in
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

export default Signup;
