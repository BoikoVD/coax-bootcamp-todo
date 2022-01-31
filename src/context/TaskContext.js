import React from 'react';

const SET_TASKS = "SET_TASKS";

const taskReducer = (state, action) => {
	switch (action.type) {
		case SET_TASKS:
			return {
				...state, tasks: action.tasks
			}
		default:
			return state;
	}
}

export const setTasksAC = (tasks) => ({ type: SET_TASKS, tasks });


const TaskContext = React.createContext();

export const TaskContextProvider = ({ children }) => {
	let defaultState;

	const localTasks = JSON.parse(localStorage.getItem('tasks'));

	if (localTasks) {
		defaultState = { tasks: localTasks };
	} else {
		defaultState = { tasks: [] };
	}

	const [tasks, tasksDispatch] = React.useReducer(taskReducer, defaultState);

	return <TaskContext.Provider value={{ tasks, tasksDispatch }}>{children}</TaskContext.Provider>
};

export const useTasks = () => {
	return React.useContext(TaskContext);
};