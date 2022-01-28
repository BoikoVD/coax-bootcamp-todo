import React from 'react';
import cl from './Button.module.scss';
import cn from 'classnames';

const Button = (props) => {

	const { className, children, ...otherProps } = props;

	const classes = cn(cl.btn, className);

	return (
		<button className={classes} {...otherProps}>
			{children}
		</button>
	);
}

export default Button;