const initState = {
    quizEnd: false,
    quizScore: 0,
    totalScore: 100,
}

const quizEndReducer= (state = initState, action)=> {
    // caction= action.type;
    switch(action.type) {
        case 'TIMER_ZERO':
        return {
            ...state,
            quizEnd: true,
        }
        case 'QUIZ_FINISH':
        return {
            ...state,
            quizEnd: true,
        }
        case 'UPDATE_QUIZ_SCORE':
        return {
            ...state,
            quizScore: action.payload,
        }
        default:
            return state;
    }
    
      
}


export default quizEndReducer
