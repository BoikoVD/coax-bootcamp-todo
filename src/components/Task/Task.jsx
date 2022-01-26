import React from 'react';
import cl from './Task.module.scss';
import CheckboxIcon from '../../assets/icons/empty.svg';
import CheckedIcon from '../../assets/icons/checked.svg';
import SkippedIcon from '../../assets/icons/skipped.svg';
import TrashIcon from '../../assets/icons/trash.svg';

class Task extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={cl.task}>
				<button className={cl.checkbox} onClick={() => this.props.checkboxHandler(this.props.task.id)}>
					<img src={CheckboxIcon} alt="" />
					{this.props.task.status === 'done' ? <img src={CheckedIcon} alt="" /> :
						this.props.task.status === 'skipped' ? <img src={SkippedIcon} alt="" /> : null}
				</button>
				<div className={cl.text}>
					{this.props.task.text}
				</div>
				<button className={cl.deleteBtn} onClick={() => this.props.deleteTask(this.props.task.id)}>
					<img src={TrashIcon} alt="" />
				</button>
			</div>
		);
	}
}

export default Task;