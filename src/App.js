import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/contact" component={Home} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/sign-in" component={Signin} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
