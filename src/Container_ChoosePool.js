import React from 'react';

import PoolCard from './Pool_card';
const ContainerChoosePool=()=>{
   return( 
   <div>
   <div className="choosePool"> STEP 1 : CHOOSE POOL</div>
   <div className="container">
    <PoolCard total_price="100" pool_price="10"/>
    <PoolCard total_price="200" pool_price="15"/>
    <PoolCard total_price="500" pool_price="50"/>
    </div>
    </div>
   );
}

export default ContainerChoosePool;