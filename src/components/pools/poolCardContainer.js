import React from "react";
import PoolCard from "./poolCard";                                      

const PoolCardContainer = ({ choosePools }) => {
  return (
    <div>
      <div className="poolContainer">
        { choosePools && choosePools.map(p => {
          return(
              <PoolCard prize={p.prize} entry={p.entry} key={p.id}/>
          )
        })}
      </div>
    </div>
  );
};

export default PoolCardContainer;
