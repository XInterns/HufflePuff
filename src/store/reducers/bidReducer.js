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

const bidReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BID_PLACED':
             console.log("action.payload: "+action.payload);
            return {
                ...state,
                user: { ...state.user,
                pools_selected: [...user.pools_selected.slice(0,action.index), action.payload]}
            };
            //return {...state, user: [...state.user, obj]}  
        default: return state;
    }
}   

export default bidReducer;
