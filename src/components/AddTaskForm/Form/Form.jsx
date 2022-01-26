import React from 'react';
import cl from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

class Form extends React.Component {
	state = {
		value: '',
		hasError: false
	}

	createTask(e) {
		e.preventDefault();
		if (!this.state.value) {
			this.setState({ hasError: true });
			return;
		}
		let newTask = {
			id: uuidv4(),
			text: this.state.value,
			status: 'empty'
		}
		this.props.addTask(newTask);
		this.setState({ value: '' });
	}

	changeValue(e) {
		if (!this.state.value) {
			this.props.removeError();
		}
		this.setState({ value: e.target.value });
	}

	render() {
		if (this.state.hasError) {
			throw new Error('The input field is empty');
		}

		return (
			<form className={cl.form} onSubmit={this.createTask.bind(this)}>
				<Input
					className={cl.input}
					placeholder='Write your task here'
					value={this.state.value}
					onChange={this.changeValue.bind(this)}
				/>
				<Button className={cl.btn} type='Submit'>Add</Button>
			</form>
		);
	}
}

export default Form;