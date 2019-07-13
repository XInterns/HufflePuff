import React, { Component } from "react";

import "./pools.css";

import PoolCardContainer from "./poolCardContainer";
import SelectPlayerNavbar from "../select players/SelectPlayerNavbar";
export class pools extends Component {
  render() {
    return (
      <div>
        <SelectPlayerNavbar id="select pool" heading="Select Pool" link="/CricketPool1" />
        <PoolCardContainer />
      </div>
    );
  }
}

export default pools;
