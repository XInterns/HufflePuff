import {contests} from '../../assets/data/ContestData'

const initState = {
    // contests: [
    //     { id: 'cc001', sport:'cricket', teamA:'india', teamB:'bangladesh' }
    // ]
    contests
}

const contestReducer = (state = initState, action) => {
    // define actions for the state of a game by a user
    switch (action.type) {
        case 'MATCH_CHOSEN':
        //   console.log('create project success');
        // complete object array..
          return state;
    return state;
    }
}

export default contestReducer;
