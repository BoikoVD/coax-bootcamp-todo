import React from 'react';
import cl from './App.module.scss';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import ListHeader from './components/ListHeader/ListHeader';
import TaskList from './components/TaskList/TaskList';

const App = () => {

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
