import React from 'react';
import cl from './Task.module.scss';
import CheckboxIcon from '../../assets/icons/empty.svg';
import CheckedIcon from '../../assets/icons/checked.svg';
import SkippedIcon from '../../assets/icons/skipped.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import { deleteTaskAC, setNewStatusAC, useTasks } from '../../context/TaskContext';

const Task = (props) => {
	let { dispatch } = useTasks();

	const { task } = props;

	const deleteTask = (id) => {
		dispatch(deleteTaskAC(id));
	};
	const checkboxHandler = (id) => {
		dispatch(setNewStatusAC(id));
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