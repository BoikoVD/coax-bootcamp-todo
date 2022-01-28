import React from 'react';
import cl from './App.module.scss';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import ListHeader from './components/ListHeader/ListHeader';
import TaskList from './components/TaskList/TaskList';

const App = () => {
	/*
		componentDidUpdate(prevProps, prevState) {
			if (this.state.tasks.length > prevState.tasks.length) {
				const addedTask = this.state.tasks.find(newStateEl => {
					return prevState.tasks.findIndex(oldStateEl => JSON.stringify(oldStateEl) === JSON.stringify(newStateEl)) === -1
				});
				console.log(`Task "${addedTask.text}" added`);
			}
			localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
		}
	*/
	return (
		<div className={cl.wrapper}>
			<div className={cl.body}>
				<div className={cl.list}>
					<ListHeader />
					<TaskList />
				</div>
			</div>
			<AddTaskForm />
		</div>
	);
}

export default App;
