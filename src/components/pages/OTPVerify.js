import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Constants from '../../constants/Constants';
import { verifyOTP } from '../../services/authService';

class OTPVerify extends Form {
    state = {
        data: {
            token: "",
        },
        errors: {},
    };

    schema = {
        token: Joi.string().required().label("OTP Token"),
    };

    doSubmit = async () => {
        try {
            let data = window.localStorage.getItem(Constants.AFTER_OTP_DATA) &&
                JSON.parse(window.localStorage.getItem(Constants.AFTER_OTP_DATA));
            const url = data.url;

            const otpData = {
                phoneNumber: data.phoneNumber,
                token: data.token,
                actionType: data.actionType
            }

            let response = await verifyOTP(otpData);

            if (response.status === 200) {
                toast.success(response.data.message);

                if(response.data.resetToken) {
                    data.resetToken = response.data.resetToken;
                    data = JSON.stringify(data);
                    window.localStorage.setItem(Constants.AFTER_OTP_DATA, data);
                }

                setTimeout(() => {
                    this.props.history.push(url);
                }, 3000);
            }
        } catch (error) {
            console.log(error)
            if(!error.response) {
                toast.error(Constants.NETWORK_ERROR_MESSAGE);
            }

            if(error.response) {

                const { data, status } = error.response;

                if (status === 500 || status === 400) {
                    toast.error("Something went wrong. Please, contact support");
                }

                if(status === 422 || status === 404) {
                    toast.error("Please check the field for error(s)");
                    const errs = {};

                    if(data.data.errors) {
                        for (let item of data.data.errors) errs[item.param] = item.msg;
                        this.setState({errors: errs || {}})
                    }else if(data.data.length > 0) {
                        for (let item of data.data) errs['token'] = item.msg;
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
                                        <h4 className="card-title text-center">Verify OTP</h4>

                                        <form className="login-form mt-4" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p className="text-muted">Please enter the OTP sent to your phone number.</p>
                                                    {this.renderInput("token", "Token", "text")}
                                                </div>
                                                {this.renderButton("Verify")}

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

export default OTPVerify;
