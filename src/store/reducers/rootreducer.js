import authReducer from './authReducer';
import teamReducer from './teamReducer';
import poolReducer from './poolReducer';
import {combineReducers} from 'redux';
import playerReducer from './playerReducer';
import quizEndReducer from './quizEndReducer';
import contestReducer from './contestReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    team: teamReducer,
    pool: poolReducer,
    player: playerReducer,
    quizEnd: quizEndReducer,
    contest: contestReducer
});

export default rootReducer;


