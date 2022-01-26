import React from 'react';
import cl from './Button.module.scss';
import cn from 'classnames';

class Button extends React.Component {

	render() {
		const { className, children, ...props } = this.props;

		const classes = cn(cl.btn, className);

		return (
			<button className={classes} {...props}>
				{children}
			</button>
		);
	}
}

export default Button;