import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import Joi from "joi-browser";
import Constants from "../../constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { passwordreset } from '../../services/authService';

class ResetPassword extends Form {
    state = {
        data: {
            password: "",
            passwordConfirm: ""
        },
        errors: {},
        resetData: {}
    };

    schema = {
        password: Joi.string().min(8).required().label("Password"),
        passwordConfirm: Joi.string().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match Password' } } }).label('Password Confirm'),
    };

    componentDidMount() {
        let data = window.localStorage.getItem(Constants.AFTER_OTP_DATA) &&
            window.localStorage.getItem(Constants.AFTER_OTP_DATA);

        data = JSON.parse(data);
        this.setState({ ...this.state.resetData, resetData: data});
    }

    doSubmit = async () => {

        try {
            let response = await passwordreset(this.state.resetData.phoneNumber, this.state.resetData.resetToken, this.state.data.password);

            if (response.status === 200) {
                toast.success(response.data.message);

                setTimeout(() => {
                    this.props.history.push(this.resetData.url);
                }, 3000)
            }
        } catch (error) {
            if(!error.response) {
                toast.error(Constants.NETWORK_ERROR_MESSAGE);
            }

            if(error.response) {

                const { data, status } = error.response;

                if (status === 500 || status === 400) {
                    toast.error("Something went wrong. Please, contact support");
                }

                if(status === 404 || status === 403) {
                    for (let item of data.data) {
                        toast.error(item.msg)
                    }

                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 4000)
                }

                if(status === 422) {
                    console.log(data)
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
                                        <h4 className="card-title text-center">Password Reset</h4>

                                        <form className="login-form mt-4" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {this.renderInput("password", "New Password", "password")}
                                                </div>
                                                <div className="col-lg-12">
                                                    {this.renderInput("passwordConfirm", "Password Confirm", "password")}
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
        );
    }
}

export default ResetPassword;
