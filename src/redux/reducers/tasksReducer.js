import * as types from '../types/types';

export default function tasksReducer(state = { tasks: [] }, action) {
	switch (action.type) {
		case types.SET_TASKS:
			return {
				...state, tasks: action.tasks
			}
		default:
			return state;
	}
}

