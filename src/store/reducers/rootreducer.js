import authReducer from './authReducer';
import bidReducer from './bidReducer';
import poolReducer from './poolReducer';
import {combineReducers} from 'redux';
import playerReducer from './playerReducer';
import adminReducer from './adminReducer';
import contestReducer from './contestReducer';
import quizEndReducer from './quizEndReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    bid: bidReducer,
    pool: poolReducer,
    player: playerReducer,
    contest: contestReducer,
    quizEnd: quizEndReducer,
    admin: adminReducer,
});

export default rootReducer;


