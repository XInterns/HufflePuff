import React, { Component } from "react";
import "./pools.css";
import {connect} from 'react-redux';
import PoolCardContainer from "./poolCardContainer";
import SelectPlayerNavbar from "../select players/SelectPlayerNavbar";

class pools extends Component {
  render() {
    const { choosePool } = this.props;
    console.log(this.props);
    return (
      <div>
        <SelectPlayerNavbar id="select pool" heading="Select Pool" link="/CricketPool1" />
        <PoolCardContainer choosePools={choosePool} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    choosePool: state.pool.pools,
    userData: state.contest.user
  }
};

export default connect(mapStateToProps)(pools);
