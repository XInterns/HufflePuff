import {games} from '../../assets/data/Data';
import {pools} from '../../assets/data/Data';
import {players} from '../../assets/data/Data';
import {user} from '../../assets/data/Data';

const initState = {
    games,
    players,
    pools,
    user,
}

const quizEndReducer= (state = initState, action)=> {
    // caction= action.type;
    switch(action.type) {
        case 'TIMER_ZERO':
        return {
            ...state,
            user: { ...state.user,
                user_score: {quizEnd: true }
            }   
        }
        case 'QUIZ_FINISH':
        return {
            ...state,
            user: { ...state.user,
                user_score: {quizEnd: true }
            }
        }
        case 'UPDATE_QUIZ_SCORE':
        return {
            ...state,
            user: { ...state.user,
                user_score: {...user.user_score.quizEnd,
                    quizScore: action.payload,
                    totalScore: 100 + (action.payload*10)
                 }
            }
            
        }
        default:
            return state;
    }
    
      
}


export default quizEndReducer
