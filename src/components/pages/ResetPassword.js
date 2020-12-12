import React from 'react';
import Form from "../common/form";
import Joi from "joi-browser";
import {Fragment} from "react";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";
import Constants from "../../constants/Constants";
import { resetpassword } from "../../services/authService";

class ResetPassword extends Form {
    state = {
        data: {
            phoneNumber: ""
        },
        errors: {}
    }

    schema = {
        phoneNumber: Joi.number().required().label("Phone Number"),
    }

    doSubmit = async () => {
        try {
            let response = await resetpassword(this.state.data.phoneNumber);

            if (response.status === 200) {
                toast.success(response.data.message);
                const {otpToken, phoneNumber} = response.data;

                const data = JSON.stringify({
                    actionAfterOTP: Constants.PASSWORD_RESET,
                    url: "/password-reset",
                    phoneNumber: phoneNumber,
                    token: otpToken
                });

                window.localStorage.setItem(Constants.AFTER_OTP_DATA, data);

                setTimeout(() => {
                    this.props.history.push("/otp/verify");
                }, 3000)
            }
        } catch( error ) {
            if(!error.response) {
                toast.error(Constants.NETWORK_ERROR_MESSAGE);
            }

            if(error.response) {

                const { data, status } = error.response;

                if (status === 500 || status === 400) {
                    toast.error("Something went wrong. Please, contact support");
                }

                if(status === 422) {
                    toast.error("Please check the field for error(s)");
                    const errs = {};

                    if(data.data.errors) {
                        for (let item of data.data.errors) errs[item.param] = item.msg;
                        this.setState({errors: errs || {}})
                    }else if(data.data) {
                        for (let item of data.data) errs[item.param] = item.msg;
                        this.setState({errors: errs || {}})
                    }
                }

                if(status === 404) {
                    toast.error(data.data)
                }
            }
        }
    }

    render() {
        return (
            <Fragment>
                <ToastContainer />
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="btn btn-icon btn-soft-primary">
                        <i data-feather="home" className="uil uil-home" />
                    </Link>
                </div>

                <section className="bg-home bg-circle-gradiant d-flex align-items-center">
                    <div className="bg-overlay bg-overlay-white"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-8">
                                <div className="card login_page shadow rounded border-0">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Reset Password</h4>

                                        <form className="login-form mt-4" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p className="text-muted">Please enter your registered phone number.</p>
                                                    {this.renderInput("phoneNumber", "Phone Number", "text")}
                                                </div>
                                                {this.renderButton("Reset")}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </Fragment>
        )
    }
}

export default ResetPassword;