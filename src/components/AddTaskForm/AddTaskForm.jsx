import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import cl from './AddTaskForm.module.scss';
import { v4 as uuidv4 } from 'uuid';

class AddTaskForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}
	}

	createTask(e) {
		e.preventDefault();
		let newTask = {
			id: uuidv4(),
			text: this.state.value,
			status: 'empty'
		}
		this.props.addTask(newTask);
		this.setState({ value: '' });
	}

	changeValue(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<form className={cl.form} onSubmit={this.createTask.bind(this)}>
				<Input className={cl.input} placeholder='Write your task here' value={this.state.value} onChange={this.changeValue.bind(this)} />
				<Button className={cl.btn} type='Submit'>Add</Button>
			</form>
		);
	}
}

export default AddTaskForm;
