export const createTeam = (team) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('projects').add({
        // ...project,
        playerName: 'M.S.Dhoni ',
        authorId: 7,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_TEAM_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_TEAM_ERROR' }, err);
      });
    }
  };