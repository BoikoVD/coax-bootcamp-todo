import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/actions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import cl from './AddTaskForm.module.scss';

const AddTaskForm = () => {
	const [value, setValue] = React.useState('');
	const [hasError, setHasError] = React.useState(false);

	const tasks = useSelector(state => state.tasksReducer.tasks);
	const isLoading = useSelector(state => state.loadingReducer.isLoading);
	const dispatch = useDispatch();

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

		const newTasks = [...tasks, newTask]
		dispatch(actions.setTasksAsyncAC(newTasks, value));
		setValue('');
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
			<Button className={cl.btn} type='Submit' disabled={isLoading}>{isLoading ? '...' : 'Add'}</Button>
		</form>
	</>;
}

export default AddTaskForm;