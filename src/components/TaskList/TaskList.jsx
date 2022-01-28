import React from 'react';
import Task from '../Task/Task';
import { setTasksAC, useTasks } from '../../context/TaskContext';

const TaskList = () => {
	let { state, dispatch } = useTasks();

	React.useEffect(() => {
		const localTasks = JSON.parse(localStorage.getItem('tasks'));
		if (localTasks) {
			dispatch(setTasksAC(localTasks));
		}
	}, []);

	React.useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(state.tasks));
	}, [state.tasks]);

	return (
		<>
			{state.tasks.map(task => <Task task={task} key={task.id} />)}
		</>
	);
}

export default TaskList;
