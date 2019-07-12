import React, { Component } from "react";

import "./contests.css";

import ContestCardContainer from "./contestCardContainer";
import SelectPlayerNavbar from "../../select players/SelectPlayerNavbar";

export class Contests extends Component {
  render() {
    return (
      <div>
        <SelectPlayerNavbar id="select contest" heading="Choose Game" link="/contests"/>
        <ContestCardContainer />
      </div>
    );
  }
}

export default Contests;
