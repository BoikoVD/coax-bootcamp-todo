import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/actions'
import CheckboxIcon from '../../assets/icons/empty.svg';
import CheckedIcon from '../../assets/icons/checked.svg';
import SkippedIcon from '../../assets/icons/skipped.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import cl from './Task.module.scss';

const Task = ({ task }) => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasksReducer.tasks);

	const deleteTask = (id) => {
		const newTasks = tasks.filter(task => task.id !== id);
		dispatch(actions.setTasksAC(newTasks));
	};

	const checkboxHandler = (id) => {
		const newTasks = tasks.map(task => {
			if (task.id === id) {
				task.status === 'done'
					?
					task.status = 'skipped'
					:
					task.status === 'skipped'
						?
						task.status = 'empty'
						:
						task.status = 'done';
			}
			return task;
		})
		dispatch(actions.setTasksAC(newTasks));
	};

	React.useEffect(() => {
		return () => {
			console.log(`Task "${task.text}" deleted`);
		}
	}, []);

	return (
		<div className={cl.task}>
			<button className={cl.checkbox} onClick={() => checkboxHandler(task.id)}>
				<img src={CheckboxIcon} alt="" />
				{task.status === 'done' ? <img src={CheckedIcon} alt="" /> :
					task.status === 'skipped' ? <img src={SkippedIcon} alt="" /> : null}
			</button>
			<div className={cl.text}>
				{task.text}
			</div>
			<button className={cl.deleteBtn} onClick={() => deleteTask(task.id)}>
				<img src={TrashIcon} alt="" />
			</button>
		</div>
	);
}

export default Task;