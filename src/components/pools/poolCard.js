import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';

const PoolCard = props => {
  // console.log("incoming props:"+props);
  return (
    
    <div className="pool_card">
      <span className="total-prize-pool">Prize Pool</span>

      <div className="total">
        {props.prize}
        <FontAwesomeIcon icon={faCoins} />
      </div>
      <span className="pool-entry">Entry</span>
      <div className="entry">
        <FontAwesomeIcon icon={faHandPointRight}/>
        <div className="pool-price">{props.entry}</div>
        <FontAwesomeIcon icon={faCoins} className="chotaCoin"/>
      </div>
      <Link to = "/batsmen"><button className="join-pool-button" value={props.value} onClick={() => props.poolHandler(props)}>JOIN POOL</button></Link>
    </div>
    
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    poolHandler: (props) => dispatch({type: 'POOL_CHOSEN', payload:props})
  }
}

export default connect(null,mapDispatchToProps)(PoolCard);
