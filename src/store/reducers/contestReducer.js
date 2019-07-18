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
                user: { ...user, contests_selected: [...user.contests_selected, action.payload]}
            }
        default: return state;
    }
}    

export default contestReducer;
