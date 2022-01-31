import * as types from '../types/types';

export const setTasksAC = (tasks) => ({ type: types.SET_TASKS, tasks });
export const setTasksAsyncAC = (tasks) => ({ type: types.SET_TASKS_ASYNC, tasks });
export const setIsLoadingAC = (isLoading) => ({ type: types.IS_LOADING, isLoading });