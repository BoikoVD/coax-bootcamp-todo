import { takeLatest, put } from 'redux-saga/effects'
import * as actions from '../actions/actions';
import * as types from '../types/types'

const getData = () => new Promise(resolve => {
	setTimeout(() => resolve({}), 2000)
})

export function* newTasksWorker({ tasks, newTaskName }) {
	yield put(actions.setIsLoadingAC(true));
	yield getData();
	yield put(actions.setTasksAC(tasks));
	yield put(actions.setIsLoadingAC(false));
	console.log(`Task "${newTaskName}" added`);
}

export function* newTasksWatcher() {
	yield takeLatest(types.SET_TASKS_ASYNC, newTasksWorker);
}

export default function* rootSaga() {
	yield newTasksWatcher();
}