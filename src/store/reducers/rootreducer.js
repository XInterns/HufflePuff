import authReducer from './authReducer';
import teamReducer from './teamReducer';
import poolReducer from './poolReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    team: teamReducer,
    pool: poolReducer
});

export default rootReducer;


