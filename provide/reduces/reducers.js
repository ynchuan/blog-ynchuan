import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {CLICK_TITLEBTN, OUTPUT_ARTICLE} from '../action/actions';

function titleBtnStatus(state={slideState:false,isBack:false}, action){
	switch(action.type){
		case CLICK_TITLEBTN:
			return Object.assign({},state,{
				slideState:action.slideState,
				isBack:action.isBack
			});
		default:
			return state;
	}
}


function article(state='', action={}){
	switch(action.type){
		case OUTPUT_ARTICLE:
			return action.contents[action.articleName];
		default:
			return '';
	}
}

const rootReducer =  combineReducers({
	titleBtnStatus,
	article,
	routing: routerReducer
});
export default rootReducer;