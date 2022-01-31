import * as types from '../types/types';

export default function loadingReducer(state = { isLoading: false }, action) {
	switch (action.type) {
		case types.IS_LOADING:
			return {
				...state, isLoading: action.isLoading
			}
		default:
			return state;
	}
}

