import React from 'react';

const SET_TASKS = "SET_TASKS";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const SET_NEW_STATUS = "SET_NEW_STATUS";

const taskReducer = (state, action) => {
	switch (action.type) {
		case SET_TASKS:
			return {
				...state, tasks: action.tasks
			}
		case ADD_TASK:
			return {
				...state, tasks: [...state.tasks, action.newTask]
			}
		case DELETE_TASK:
			return {
				...state, tasks: state.tasks.filter(task => task.id !== action.id)
			}
		case SET_NEW_STATUS:
			return {
				...state, tasks: state.tasks.map(task => {
					if (task.id === action.id) {
						task.status === 'done' ? task.status = 'skipped' :
							task.status === 'skipped' ? task.status = 'empty' : task.status = 'done';
					}
					return task;
				})
			}
		default:
			return state;
	}
}

export const setTasksAC = (tasks) => ({ type: SET_TASKS, tasks });
export const addTaskAC = (newTask) => ({ type: ADD_TASK, newTask });
export const deleteTaskAC = (id) => ({ type: DELETE_TASK, id });
export const setNewStatusAC = (id) => ({ type: SET_NEW_STATUS, id });


const TaskContext = React.createContext();

export const TaskContextProvider = ({ children }) => {
	let [state, dispatch] = React.useReducer(taskReducer, { tasks: [] });

	return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>
};

export const useTasks = () => {
	return React.useContext(TaskContext);
};