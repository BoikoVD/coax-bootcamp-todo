import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { TaskContextProvider } from './context/TaskContext';

ReactDOM.render(
	<React.StrictMode>
		<TaskContextProvider>
			<App />
		</TaskContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
