import {createStore,applyMiddleware } from 'redux';  
import rootReducer from '../reduces/reducers';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';

export default function configureStore(initState) {
	const middleware = routerMiddleware(hashHistory); 
	const store = applyMiddleware(middleware)(createStore)(rootReducer,initState);
	// const store = createStore(rootReducer,initState);
	return store;
}