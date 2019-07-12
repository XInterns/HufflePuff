
export const createProject= (project) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...project,
            userFirstName: 'Gautam',
            userLastName: 'Rajpal',
            userId: 12345
        }).then(()=> {
            dispatch({type:"CREATE_PROJECT", project}, )
        }).catch((err)=> {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};