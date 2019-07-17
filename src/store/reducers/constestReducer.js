import {games} from '../../assets/data/Data'

const initState = {
    games
}

const contestReducer = (state = initState, action) => {
    // define actions for the state of a game by a user
    switch (action.type) {
        case 'MATCH_CHOSEN':
            return {...state,contestChosen: true}
            // console.log('create project success');
          
        // complete object array..
        default:    return state;
    }
}

export default contestReducer;
