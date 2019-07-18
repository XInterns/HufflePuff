import {games} from '../../assets/data/Data';
import {pools} from '../../assets/data/Data';
import {players} from '../../assets/data/Data';
import {user} from '../../assets/data/Data';

const initState = {
    games,
    players,
    pools,
    user
}

const poolReducer = (state = initState, action) => {
    switch (action.type) {
        case 'POOL_CHOSEN':
            //  console.log("action.payload: "+action.payload);
            return {
                ...state,
                user: { ...state.user,
                pools_selected: [...user.pools_selected, action.payload]}
            };
            //return {...state, user: [...state.user, obj]}  
        default: return state;
    }
}   


export default poolReducer;
