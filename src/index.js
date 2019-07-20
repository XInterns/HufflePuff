import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootreducer';
import {Provider} from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore} from 'redux-firestore';
// import { reactReduxFirebase, getFirebase} from 'react-redux-firebase';
// import fbconfig from './sign_in/config/firebaseConfig'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// for an object in the arg
// compose --> store enhancer
// compose(
    // applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // reduxFirestore(fbconfig),
    // reactReduxFirebase(fbconfig)
//    )
//  );

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
