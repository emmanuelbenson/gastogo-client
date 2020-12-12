import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import OTPVerify from "./components/pages/OTPVerify";
import ResetPassword from "./components/pages/ResetPassword";
import PasswordReset from "./components/pages/PasswordReset";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ Home } />
          <Route path="/contact" component={ Home } />
          <Route path="/sign-up" exact component={ Signup } />
          <Route path="/sign-in" exact component={ Signin } />
          <Route path="/otp/verify" component={ OTPVerify } />
          <Route path="/reset-password" component={ ResetPassword } />
          <Route path="/password-reset" component={ PasswordReset } />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
