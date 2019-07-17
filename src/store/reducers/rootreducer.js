import authReducer from './authReducer';
import teamReducer from './teamReducer';
import poolReducer from './poolReducer';
import {combineReducers} from 'redux';
import playerReducer from './playerReducer';
import contestReducer from './constestReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    team: teamReducer,
    pool: poolReducer,
    player: playerReducer,
    contest: contestReducer
});

export default rootReducer;


