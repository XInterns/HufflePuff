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

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLAYER_CHOSEN':
        //  console.log("action.payload: "+action.payload);
        return {
            ...state,
            user: { ...user, players_selected: [...user.players_selected, action.payload]}
        };
        //return {...state, user: [...state.user, obj]}  
    default: return state;
}
}   

export default playerReducer;
