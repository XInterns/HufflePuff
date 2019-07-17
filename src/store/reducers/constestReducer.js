import {games} from '../../assets/data/Data';
import {user} from '../../assets/data/Data';

const initState = {
    games,
    user
}

const contestReducer = (state = initState, action) => {
    // define actions for the state of a game by a user
    switch (action.type) {
        case 'GAME_CHOSEN':
            console.log(action.payload);
            return {
                ...state,
                user: { ...user, contests_selected: [...user.contests_selected, action.payload]}
            };
        //return {...state, user: [...state.user, obj]}  
        // complete object array..
        default: return state;
    }
}    

export default contestReducer;
