import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskContextProvider } from './context/TaskContext';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<TaskContextProvider>
			<App />
		</TaskContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
