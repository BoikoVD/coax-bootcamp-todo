import React from 'react';
import Task from '../Task/Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
	const tasks = useSelector(state => state.tasksReducer.tasks);

	return (
		<>
			{tasks.map(task => <Task task={task} key={task.id} />)}
		</>
	);
}

export default TaskList;
