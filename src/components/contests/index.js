import React, { Component } from "react";
import "./contests.css";
import ContestCardContainer from "./contestCardContainer";
import SelectPlayerNavbar from "../select players/SelectPlayerNavbar";

export class Contests extends Component {
  render() {
    return (
      <div>
        {/* <div id="division1"></div>
        <div id="division2"></div>
        <div id="division3"></div>
        <div id="division4"></div> */}
        <SelectPlayerNavbar id="select contest" heading="Choose Game" link="/contests"/>
        <ContestCardContainer />
      </div>
    );
  }
}

export default Contests;
