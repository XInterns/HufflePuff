import {games} from '../../assets/data/Data';
import {pools} from '../../assets/data/Data';
import {players} from '../../assets/data/Data';
import {user} from '../../assets/data/Data';

const initState = {
    games,
    pools,
    players,
    user
}

const contestReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GAME_CHOSEN':
            // console.log(action.payload);
            return {
                ...state,
                user: { ...state.user,
                contests_selected: [...user.contests_selected.slice(0,action.index), action.payload]}
            }
        default: return state;
    }
}    

export default contestReducer;
