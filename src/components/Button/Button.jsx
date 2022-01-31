import React from 'react';
import cn from 'classnames';
import cl from './Button.module.scss';

const Button = ({ className, children, ...otherProps }) => {
	const classes = cn(cl.btn, className);

	return (
		<button className={classes} {...otherProps}>
			{children}
		</button>
	);
}

export default Button;