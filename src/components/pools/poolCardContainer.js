import React from "react";

import PoolCard from "./poolCard";

const PoolCardContainer = () => {
  return (
    <div>
      <div className="poolContainer">
        <PoolCard total_price="100" pool_price="10" value="pool_100"/>
        <PoolCard total_price="200" pool_price="15" value="pool_200"/>
        <PoolCard total_price="500" pool_price="50" value="pool_500"/>
      </div>
    </div>
  );
};

export default PoolCardContainer;
