import {pools} from '../../assets/data/ContestData';

const initState = {
    pools
    // pools: [
    //     {    id: 'cp001', entry: 10, prize: 100, chosen:false },
    //     {    id: 'cp002', entry: 15, prize: 200, chosen:false },
    //     {    id: 'cp003', entry: 50, prize: 500, chosen:false }        
    // ]
}

const poolReducer = (state = initState, action) => {
    return state;
}

export default poolReducer;
