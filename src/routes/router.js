import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

import { HomePage } from "../pages";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
