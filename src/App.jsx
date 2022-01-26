import React from 'react';
import cl from './App.module.scss';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import ListHeader from './components/ListHeader/ListHeader';
import Task from './components/Task/Task';

class App extends React.Component {
	constructor(props) {
		super(props);
		const tasks = JSON.parse(localStorage.getItem('tasks'));
		if (tasks) {
			this.state = { tasks };
		} else {
			this.state = { tasks: [] }
		}
	}

	addTask = (task) => {
		this.setState({
			tasks: [...this.state.tasks, task]
		});
	}
	deleteTask = (id) => {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== id)
		});
	}
	checkboxHandler = (id) => {
		this.setState({
			tasks: this.state.tasks.map(task => {
				if (task.id === id) {
					task.status === 'done' ? task.status = 'skipped' :
						task.status === 'skipped' ? task.status = 'empty' : task.status = 'done';
				}
				return task;
			})
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.tasks.length > prevState.tasks.length) {
			const addedTask = this.state.tasks.find(newStateEl => {
				return prevState.tasks.findIndex(oldStateEl => JSON.stringify(oldStateEl) === JSON.stringify(newStateEl)) === -1
			});
			console.log(`Task "${addedTask.text}" added`);
		}
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	render() {
		return (
			<div className={cl.wrapper}>
				<div className={cl.body}>
					<div className={cl.list}>
						<ListHeader />
						{this.state.tasks.map(task => <Task task={task} deleteTask={this.deleteTask} checkboxHandler={this.checkboxHandler} key={task.id} />)}
					</div>
				</div>
				<AddTaskForm addTask={this.addTask} />
			</div>
		);
	}
}

export default App;
