import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
	tasksReducer: tasksReducer,
	loadingReducer: loadingReducer
});

export default rootReducer;