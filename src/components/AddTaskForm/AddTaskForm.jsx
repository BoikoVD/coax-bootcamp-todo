import React from 'react';
import cl from './AddTaskForm.module.scss';
import Form from './Form/Form';

class AddTaskForm extends React.Component {
	state = {
		error: null,
	};

	componentDidCatch(error) {
		console.log(`ERROR: ${error.message}`)
		this.setState({ error: error })
	}

	removeError = () => {
		this.setState({ error: null })
	}

	render() {
		return <>
			{this.state.error ? <div className={cl.warn}>You did not enter the task name</div> : null}
			<Form removeError={this.removeError} {...this.props} />
		</>;
	}
}

export default AddTaskForm;