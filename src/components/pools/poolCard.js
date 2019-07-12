import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const PoolCard = props => {

  function handleClick(e){
    console.log(e.target.value);
  }
  return (
    
    <div className="pool_card">
      <span className="total-prize-pool">Prize Pool</span>

      <div className="total">
        {props.total_price}
        <FontAwesomeIcon icon={faCoins} />
      </div>
      <span className="pool-entry">Entry</span>
      <div className="entry">
        <FontAwesomeIcon icon={faHandPointRight}/>
        <div className="pool-price">{props.pool_price}</div>
        <FontAwesomeIcon icon={faCoins} className="chotaCoin"/>
      </div>
      <Link to = "/batsmen"><button className="join-pool-button" value={props.value} onClick={handleClick}>JOIN POOL</button></Link>
    </div>
    
  );
};

export default PoolCard;
