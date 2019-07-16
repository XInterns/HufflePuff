import authReducer from './authReducer';
import teamReducer from './teamReducer';
import poolReducer from './poolReducer';
import {combineReducers} from 'redux';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    team: teamReducer,
    pool: poolReducer,
    player: playerReducer
});

export default rootReducer;


