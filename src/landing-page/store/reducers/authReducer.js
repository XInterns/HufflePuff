const initState = {
    isLogged: false
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'AUTH_SUCCESS':
            return {isLogged: true};
        default:
            return state; 
    }
};

export default authReducer
