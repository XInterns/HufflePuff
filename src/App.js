import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Contests from "./components/contests";
import pools from "./components/pools";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/CricketPool1" component={pools} />
          <Route path="/" exact component={Contests} />
        </Switch>
      </Router>
    );
  }
}

export default App;
