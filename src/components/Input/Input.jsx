import React from 'react';
import cl from './Input.module.scss';
import cn from 'classnames';

class Input extends React.Component {

	render() {
		const { className, ...props } = this.props;

		const classes = cn(cl.input, className);

		return (
			<input type="text" className={classes} {...props} />
		);
	}
}

export default Input;