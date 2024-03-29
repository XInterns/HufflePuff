import {games} from '../../assets/data/Data';
import {pools} from '../../assets/data/Data';
import {players} from '../../assets/data/Data';
import {user} from '../../assets/data/Data';

const initState = {
    quizEnd: false,
    quizScore: 0,
    totalScore: 100
}   

const quizEndReducer= (state = initState, action)=> {
    // caction= action.type;
    switch(action.type) {
        case 'TIMER_ZERO':
        return {
            ...state,
            quizEnd: true 
            }  
        case 'QUIZ_FINISH':
        return {
            ...state,
            quizEnd: true 
        }
        case 'UPDATE_QUIZ_SCORE':
        return {
            ...state,
            quizScore: action.payload,
            totalScore: 100 + (action.payload*10)
                 }
        default:
            return state;
    }
    
      
}


export default quizEndReducer
