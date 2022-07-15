import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../components/List";
import Home from "../components/Home";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/api/v1/list" exact component={List} />
    </Switch>
  </Router>
);
