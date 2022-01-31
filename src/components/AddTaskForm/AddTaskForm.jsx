import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { setTasksAC, useTasks } from '../../context/TaskContext';
import cl from './AddTaskForm.module.scss';

const AddTaskForm = () => {
	let [value, setValue] = React.useState('');
	let [hasError, setHasError] = React.useState(false);
	let { tasks, tasksDispatch } = useTasks();

	const createTask = (e) => {
		e.preventDefault();
		if (!value) {
			setHasError(true);
			return;
		}

		let newTask = {
			id: uuidv4(),
			text: value,
			status: 'empty'
		}

		const newTasks = [...tasks.tasks, newTask]
		tasksDispatch(setTasksAC(newTasks));
		localStorage.setItem('tasks', JSON.stringify(newTasks));
		setValue('');

		console.log(`Task "${value}" added`);
	}

	const changeValue = (e) => {
		if (hasError) {
			setHasError(false);
		}
		setValue(e.target.value);
	}

	return <>
		<form className={cl.form} onSubmit={createTask}>
			{hasError ? <div className={cl.warn}>You did not enter the task name</div> : null}
			<Input
				className={cl.input}
				placeholder='Write your task here'
				value={value}
				onChange={changeValue}
			/>
			<Button className={cl.btn} type='Submit'>Add</Button>
		</form>
	</>;
}

export default AddTaskForm;