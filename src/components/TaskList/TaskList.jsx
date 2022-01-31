import React from 'react';
import Task from '../Task/Task';
import { useTasks } from '../../context/TaskContext';

const TaskList = () => {
	let { tasks } = useTasks();

	return (
		<>
			{tasks.tasks.map(task => <Task task={task} key={task.id} />)}
		</>
	);
}

export default TaskList;
