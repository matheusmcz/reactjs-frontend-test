import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import signIn from "../views/SignIn";
import Webnar from "../views/Webnar";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={signIn} />
        <Route path="/webinar" component={Webnar} />
      </Switch>
    </Router>
  );
};

export default Routes;
