const initState = {
    playerName: [],
    playerScore: [],
}

const adminReducer = (state= initState, action) => {
    switch(action.type) {
        case 'UPDATE_SCORE':
            return {
                ...state,
                playerName: [...state.playerName.slice(0,action.index), action.payload.playerName],
                playerScore: [...state.playerScore.slice(0,action.index), action.payload.playerScore]                
            }
        default:
            return state;
    }
}

export default adminReducer;