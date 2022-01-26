import React from 'react';
import cl from './Input.module.scss';
import cn from 'classnames';

class Input extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let classes = cn(cl.input, this.props.className);

		return (
			<input type="text" className={classes} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} />
		);
	}
}

export default Input;