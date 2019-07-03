import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const PoolCard = props => {
  return (
    <div className="pool_card">
      <span className="total-prize-pool">Prize Pool</span>

      <div className="total">
        {props.total_price}
        <FontAwesomeIcon icon={faCoins} />
      </div>
      <span className="pool-entry">Entry</span>
      <div className="entry">
        <FontAwesomeIcon icon={faHandPointRight} />{" "}
        <div className="pool-price">{props.pool_price}</div>
      </div>
      <button className="join-pool-button">JOIN POOL</button>
    </div>
  );
};

export default PoolCard;
